"use client";

import { FormEvent, useState } from "react";

type SubmitStatus = "idle" | "success" | "error";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    if (!payload.name || !payload.phone) {
      setStatus("error");
      setStatusMessage("Укажите имя и телефон или WhatsApp.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Не удалось отправить заявку.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Заявка отправлена. Я свяжусь с вами в ближайшее время.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте ещё раз.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-5 text-[#172033] shadow-2xl shadow-black/20 sm:rounded-3xl sm:p-9"
    >
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-slate-700">
          Ваше имя
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Как к вам обращаться"
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
          Телефон или WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          maxLength={50}
          autoComplete="tel"
          placeholder="+7 700 000 00 00"
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="company" className="text-sm font-semibold text-slate-700">
          Компания
        </label>
        <input
          id="company"
          name="company"
          type="text"
          maxLength={150}
          autoComplete="organization"
          placeholder="Название или сфера бизнеса"
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-slate-700">
          Что хотите решить
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Кратко опишите текущую ситуацию"
          className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Сайт</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 w-full rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>

      {status !== "idle" && (
        <p
          role="status"
          className={`mt-4 rounded-xl px-4 py-3 text-center text-sm leading-6 ${
            status === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {statusMessage}
        </p>
      )}

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        Нажимая кнопку, вы соглашаетесь на обработку контактных данных.
      </p>
    </form>
  );
}
