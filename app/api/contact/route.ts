import { NextResponse } from "next/server";

type ContactRequest = {
  name?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanText(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name = cleanText(body.name, 100);
    const phone = cleanText(body.phone, 50);
    const company = cleanText(body.company, 150);
    const message = cleanText(body.message, 2000);
    const website = cleanText(body.website, 200);

    // Скрытое поле заполняют автоматические боты. Для посетителя оно невидимо.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone) {
      return NextResponse.json(
        { message: "Укажите имя и телефон или WhatsApp." },
        { status: 400 },
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram environment variables are not configured.");
      return NextResponse.json(
        { message: "Сервис отправки временно недоступен." },
        { status: 500 },
      );
    }

    const submittedAt = new Intl.DateTimeFormat("ru-RU", {
      timeZone: "Asia/Almaty",
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date());

    const telegramText = [
      "🔔 Новая заявка с сайта FinControl",
      "",
      `Имя: ${name}`,
      `Телефон / WhatsApp: ${phone}`,
      `Компания: ${company || "не указана"}`,
      `Задача: ${message || "не указана"}`,
      "",
      `Время: ${submittedAt}`,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramText,
        }),
        cache: "no-store",
      },
    );

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();
      console.error("Telegram API error:", telegramError);
      return NextResponse.json(
        { message: "Не удалось отправить заявку. Попробуйте ещё раз." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Не удалось отправить заявку. Попробуйте ещё раз." },
      { status: 500 },
    );
  }
}
