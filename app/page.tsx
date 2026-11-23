import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const services = [
  {
    "number": "01",
    "title": "Финансирование бизнеса и государственная поддержка",
    "text": "Подготовка и сопровождение проектов для получения банковского финансирования и использования мер господдержки, включая возмещение затрат через QazIndustry.",
    "steps": [
      "Анализ потребности в финансировании и финансового состояния бизнеса",
      "Подбор подходящих банковских и государственных инструментов",
      "Проверка наличия документов, подготовка заявки и финансовых обоснований",
      "Сопровождение рассмотрения, ответы на запросы и замечания"
    ],
    "result": "Подготовленный проект и сопровождение его рассмотрения. Одобрение кредита, субсидии или возмещения не гарантируется."
  },
  {
    "number": "02",
    "title": "Бизнес-планы и финансовые модели",
    "text": "Разработка финансового обоснования для банков, инвесторов, расширения производства и оценки инвестиционных решений.",
    "steps": [
      "Изучение проекта и сбор исходных данных",
      "Прогноз выручки, расходов и движения денежных средств",
      "Расчёт окупаемости, рентабельности и нагрузки по кредитам",
      "Подготовка модели и бизнес-плана под задачу заказчика"
    ],
    "result": "Финансовая модель и бизнес-план с понятными расчётами для принятия решений и подачи на рассмотрение."
  },
  {
    "number": "03",
    "title": "Финансовое управление",
    "text": "Внедрение управленческого учёта, контроль прибыли, движения денег, себестоимости и платёжного календаря.",
    "steps": [
      "Диагностика финансовых данных и процессов",
      "Настройка управленческих отчётов и правил учёта",
      "Планирование денежных потоков и обязательств",
      "Обучение сотрудников и сопровождение"
    ],
    "result": "Инструменты для контроля финансового результата и планирования работы компании."
  }
];

  const results = [
  {
    "title": "Возмещение затрат",
    "text": "Проверка возможности частичного возмещения понесённых расходов через QazIndustry."
  },
  {
    "title": "Инвестиционный проект",
    "text": "Финансовая модель и бизнес-план с расчётом эффективности и потребности в финансировании."
  },
  {
    "title": "Подготовка к кредитованию",
    "text": "Оценка кредитной нагрузки и подготовка материалов для рассмотрения банком."
  },
  {
    "title": "Финансовый контроль",
    "text": "Планирование платежей и контроль прибыли после привлечения инвестиций."
  }
];

  const process = [
  {
    "number": "01",
    "title": "Первая встреча",
    "text": "Бесплатно обсуждаем задачу и определяем, могу ли я помочь."
  },
  {
    "number": "02",
    "title": "Оценка проекта",
    "text": "Анализируем исходные данные, требования и ограничения."
  },
  {
    "number": "03",
    "title": "Предложение",
    "text": "Согласуем результат, этапы, сроки и оплату."
  },
  {
    "number": "04",
    "title": "Подготовка",
    "text": "Готовим расчёты, документы и обоснования."
  },
  {
    "number": "05",
    "title": "Сопровождение",
    "text": "Отрабатываем замечания в рамках договора. Решение принимает банк или оператор."
  }
];

  const prices = [
  {
    "title": "Бизнес-план и финансовая модель",
    "price": "от 150 000 ₸",
    "description": "Подготовка финансового обоснования инвестиционного проекта.",
    "items": [
      "Расчёт инвестиций и денежных потоков",
      "Прогноз результатов и окупаемости",
      "Состав документов согласуем перед началом"
    ],
    "featured": true
  },
  {
    "title": "Финансирование и господдержка",
    "price": "после оценки проекта",
    "description": "Подготовка и сопровождение заявок в банки и по мерам поддержки, включая QazIndustry.",
    "items": [
      "Анализ условий программ и требований банков",
      "Подготовка документов и заявок",
      "Сопровождение рассмотрения без гарантии одобрения"
    ]
  },
  {
    "title": "Финансовое управление",
    "price": "после оценки проекта",
    "description": "Внедрение управленческого учёта, финансовых отчётов и платёжного календаря.",
    "items": [
      "Диагностика финансовых данных",
      "Настройка отчётов и платёжного календаря",
      "Обучение и сопровождение"
    ]
  }
];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-[#14243b]">
      <header className="border-b border-[#eae6df] bg-[#fbfaf7]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-12">
          <div>
            <div className="text-xl font-semibold tracking-tight text-[#14243b] sm:text-2xl">FinControl</div>
            <div className="hidden text-xs text-slate-500 sm:block">
              Финансы · Продажи · Процессы
            </div>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-[#997340]">
              Услуги
            </a>
            <a href="#about" className="transition hover:text-[#997340]">
              Обо мне
            </a>
            <a href="#cases" className="transition hover:text-[#997340]">
              Кейсы
            </a>
            <a href="#process" className="transition hover:text-[#997340]">
              Как работаем
            </a>
            <a href="#contacts" className="transition hover:text-[#997340]">
              Контакты
            </a>
          </nav>

          <a
            href="#contacts"
            className="shrink-0 rounded-lg bg-[#14243b] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#253e5c] sm:px-5 sm:py-3"
          >
            Обсудить мой бизнес
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#14243b] text-white">
        <div className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full border border-[#c49a58]/20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
          <div className="min-w-0">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#dfbb7d]"><span className="h-px w-8 bg-[#c49a58]" />Финансы · Продажи · Процессы</p>
            <h1 className="max-w-2xl text-[clamp(2.35rem,4.2vw,4.1rem)] font-semibold leading-[1.09] tracking-[-0.035em]">Финансовый консалтинг <span className="text-[#dfbb7d]">для бизнеса</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">Помогаю предпринимателям привлекать финансирование, использовать меры государственной поддержки и выстраивать финансовое управление компанией.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contacts" className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#c49a58] px-7 py-4 text-center font-semibold text-[#14243b] transition hover:bg-[#dfbb7d]">Обсудить задачи бизнеса</a>
              <a href="#about" className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/30 px-7 py-4 text-center font-medium text-white transition hover:border-white">Мой опыт и подход</a>
            </div>
            <p className="mt-5 text-sm text-slate-300">Первая встреча — бесплатно · Караганда и онлайн по Казахстану</p>
          </div>
          <div className="min-w-0 border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dfbb7d]">Практический опыт</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Илья Шаяпов</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">Банковский сектор · Коммерческое и исполнительное управление</p>
            <div className="mt-8 grid grid-cols-2 gap-5 border-y border-white/20 py-7">
              <div><p className="text-4xl font-semibold text-[#dfbb7d]">20+</p><p className="mt-2 text-xs leading-5 text-slate-300">лет профессионального опыта</p></div>
              <div><p className="text-xl font-semibold">28,4 млн ₸</p><p className="mt-2 text-xs leading-5 text-slate-300">возмещений предприятиям по трём сопровождавшимся проектам</p></div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-200">Работал в Казкоммерцбанке, руководил коммерческими компаниями, отвечал за продажи, финансы и внедрение управленческих систем.</p>
            <a href="#services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#dfbb7d] transition hover:text-white">Направления работы <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
      <section className="border-b border-[#e7e1d6] bg-[#f5f3ee]">
        <div className="mx-auto grid max-w-7xl px-4 py-5 sm:grid-cols-3 sm:px-6 lg:px-12">
          <div className="border-b border-[#e2ddd2] py-4 sm:border-b-0 sm:border-r sm:pr-6"><p className="text-xs font-semibold uppercase tracking-widest text-[#997340]">Финансирование и господдержка</p><p className="mt-2 font-medium text-[#14243b]">Подготовить проект для банка или программы поддержки</p></div>
          <div className="border-b border-[#e2ddd2] py-4 sm:border-b-0 sm:border-r sm:px-6"><p className="text-xs font-semibold uppercase tracking-widest text-[#997340]">Бизнес-планы и финансовые модели</p><p className="mt-2 font-medium text-[#14243b]">Обосновать инвестиции и рассчитать окупаемость</p></div>
          <div className="py-4 sm:pl-6"><p className="text-xs font-semibold uppercase tracking-widest text-[#997340]">Финансовое управление</p><p className="mt-2 font-medium text-[#14243b]">Контролировать прибыль, платежи и денежные потоки</p></div>
        </div>
      </section>

      <section id="services" className="bg-[#fbfaf7] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#997340]">Чем могу помочь</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#14243b] sm:text-4xl">Три направления работы</h2>
            </div>
            <p className="max-w-md leading-7 text-slate-600">Работаем с конкретной задачей: финансирование, меры господдержки, финансовые расчёты или управленческий учёт.</p>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#e5ded1] bg-[#e5ded1] md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#a57b42]">{service.number} / Направление</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#14243b]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                <details className="group mt-5 border-t border-[#e5ded1] pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#946e39] marker:hidden [&::-webkit-details-marker]:hidden">
                    <span>Подробнее об услуге</span>
                    <span aria-hidden="true" className="text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#997340]">Основные этапы</p>
                    <ol className="mt-3 space-y-2">
                      {service.steps.map((step, index) => (
                        <li key={step} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                          <span className="shrink-0 font-semibold text-[#997340]">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#997340]">Что получает клиент</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{service.result}</p>
                    <a href="#contacts" className="mt-4 inline-flex text-sm font-semibold text-[#946e39] underline underline-offset-4 hover:text-[#14243b]">Обсудить эту услугу</a>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f5f3ee] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[240px_1fr] lg:gap-12 lg:px-12">
          <div className="max-w-[260px] overflow-hidden rounded-lg bg-white shadow-sm">
            <Image src="/ilya-shayapov.jpg" alt="Илья Шаяпов" width={640} height={760} className="h-full w-full object-cover object-top" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#997340]">Опыт и подход</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#14243b] sm:text-4xl">Илья Шаяпов</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">Более 20 лет в банковском секторе и коммерческих компаниях. 10 лет работы в Казкоммерцбанке — от менеджера по кредитованию до директора Карагандинского филиала. Затем — более 10 лет руководства коммерческими и производственными предприятиями. Отвечал за продажи, финансовые результаты и бизнес-процессы.</p>
            <div className="mt-6 grid gap-4 border-t border-[#dbd4c7] pt-5 sm:grid-cols-3">
              <div><p className="text-sm font-semibold text-[#14243b]">Банковская экспертиза</p><p className="mt-2 text-sm leading-6 text-slate-600">Финансовый анализ, кредитование и работа с предприятиями.</p></div>
              <div><p className="text-sm font-semibold text-[#14243b]">Коммерческий опыт</p><p className="mt-2 text-sm leading-6 text-slate-600">Управление продажами, командами и изменениями в компаниях.</p></div>
              <div><p className="text-sm font-semibold text-[#14243b]">Внедрение систем</p><p className="mt-2 text-sm leading-6 text-slate-600">CRM, управленческий учёт и процессы принятия решений.</p></div>
            </div>
            <div className="mt-5 flex flex-col gap-1 border-l-2 border-[#c49a58] pl-4 text-sm leading-6 text-slate-700">
              <p><span className="font-semibold text-[#14243b]">Общественная медаль АФК «Лучший финансист»</span> — награждение в 2013 году, в период работы директором Карагандинского филиала Казкоммерцбанка.</p>
              <a href="https://web.archive.org/web/20131207183048/http://ru.kkb.kz/page/News?no=1402907" target="_blank" rel="noopener noreferrer" className="w-fit font-medium text-[#946e39] underline underline-offset-4 hover:text-[#14243b]">Публикация Казкоммерцбанка от 03.12.2013 ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="bg-[#14243b] py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dfbb7d]">Результат работы</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Финансовые решения для развития бизнеса.</h2>
            <p className="mt-5 max-w-md leading-7 text-slate-300">Оцениваем финансовые возможности предприятия, готовим обоснования для финансирования и настраиваем контроль денежных потоков.</p>
          </div>
          <div className="grid gap-0 sm:grid-cols-2">
            {results.map((result, index) => (
              <article key={result.title} className="border-t border-white/20 py-5 sm:px-5">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#dfbb7d]">0{index + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{result.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{result.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="bg-[#f5f3ee] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#997340]">Реализованные проекты QazIndustry</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#14243b] sm:text-4xl">28,4 млн ₸ возмещений предприятиям</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">В трёх проектах я анализировал документы, готовил заявки и сопровождал рассмотрение через QazIndustry (ранее КИРИ).</p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              {sum:"20 млн ₸",title:"Пищевая промышленность",text:"Возмещение затрат на производственный станок."},
              {sum:"7 млн ₸",title:"Завод в Караганде",text:"Возмещение затрат на программное обеспечение для станков с ЧПУ."},
              {sum:"1,4 млн ₸",title:"Производственное предприятие",text:"Возмещение расходов на шеф-монтаж оборудования."}
            ].map((item)=>(<article key={item.sum} className="rounded-xl border border-[#e2d9cb] bg-white p-6"><p className="text-3xl font-semibold text-[#946e39]">{item.sum}</p><h3 className="mt-3 text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></article>))}
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">Примеры не гарантируют аналогичного результата по другим заявкам: решения о возмещении принимает оператор.</p>
        </div>
      </section>

      <section id="process" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#997340]">Формат сотрудничества</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#14243b] sm:text-4xl">От первой встречи до результата</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">Знакомство бесплатно. Диагностика и дальнейшая работа — отдельные оплачиваемые этапы.</p>
          </div>
          <ol className="mt-8 grid gap-0 border-y border-[#ded8ce] md:grid-cols-5">
            {process.map((step) => (
              <li key={step.number} className="border-b border-[#e5ded1] px-0 py-5 last:border-b-0 md:border-b-0 md:border-r md:px-4 md:last:border-r-0 lg:px-5">
                <span className="text-sm font-semibold text-[#a57b42]">{step.number}</span>
                <h3 className="mt-3 text-base font-semibold text-[#14243b]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="prices" className="bg-[#f5f3ee] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#997340]">Стоимость услуг</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#14243b] sm:text-4xl">Стоимость и условия сотрудничества</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">Точный состав работ и цена определяются после оценки проекта и исходных документов.</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {prices.map((item) => (
              <article key={item.title} className={`flex h-full flex-col rounded-xl border p-6 sm:p-7 ${
                item.featured ? "border-[#14243b] bg-[#14243b] text-white" : "border-[#e2d9cb] bg-white text-[#14243b]"
              }`}>
                {item.featured && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#dfbb7d]">Основная услуга</p>}
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className={`mt-4 text-2xl font-semibold ${
                  item.featured ? "text-[#dfbb7d]" : "text-[#946e39]"
                }`}>{item.price}</p>
                <p className={`mt-3 text-sm leading-6 ${item.featured ? "text-slate-300" : "text-slate-600"}`}>{item.description}</p>
                <ul className="mt-5 flex-1 space-y-3 border-t border-current/15 pt-5">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span aria-hidden="true" className={`mt-1 text-sm ${item.featured ? "text-[#dfbb7d]" : "text-[#946e39]"}`}>✓</span>
                      <span className={`text-sm leading-6 ${item.featured ? "text-slate-200" : "text-slate-600"}`}>{point}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacts" className={`mt-6 inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-semibold transition ${
                  item.featured ? "bg-[#c49a58] text-[#14243b] hover:bg-[#dfbb7d]" : "bg-[#14243b] text-white hover:bg-[#253e5c]"
                }`}>Обсудить задачу</a>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-5 rounded-xl border border-[#e2d9cb] bg-white p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#997340]">Другие задачи бизнеса</p>
              <h3 className="mt-2 text-xl font-semibold text-[#14243b]">Развитие продаж · Оптимизация бизнес-процессов</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Стоимость рассчитывается индивидуально после обсуждения задачи, объёма работ и ожидаемого результата.</p>
            </div>
            <a href="#contacts" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#14243b] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#253e5c]">Оставить заявку</a>
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-[#14243b] py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dfbb7d]">Первая встреча — бесплатно</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">Обсудим задачи вашего бизнеса</h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-300">За 20–30 минут обсудим потребность в финансировании, понесённые затраты или задачи финансового управления. Анализ документов — отдельный платный этап.</p>
            <p className="mt-4 text-sm text-slate-300">Очно в Караганде или онлайн по Казахстану.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://wa.me/77015296291" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#c49a58] px-5 py-3 text-sm font-semibold text-[#14243b] transition hover:bg-[#dfbb7d]">Написать в WhatsApp</a>
              <a href="tel:+77015296291" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:border-white">+7 701 529-62-91</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#101e31] text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-12">
          <div>
            <div className="text-lg font-bold text-white">FinControl</div>
            <p className="mt-1 text-sm text-slate-400">
              Финансы · Продажи · Процессы
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm sm:justify-end sm:gap-x-6">
            <a href="#services" className="transition hover:text-white">
              Услуги
            </a>
            <a href="#cases" className="transition hover:text-white">
              Кейсы
            </a>
            <a href="#process" className="transition hover:text-white">
              Как работаем
            </a>
            <a href="#prices" className="transition hover:text-white">
              Стоимость
            </a>
            <a href="#contacts" className="transition hover:text-white">
              Контакты
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-slate-500 sm:px-6 sm:text-left lg:px-12">
            © 2026 FinControl. Все права защищены.
          </div>
        </div>
      </footer>
    </main>
  );
}