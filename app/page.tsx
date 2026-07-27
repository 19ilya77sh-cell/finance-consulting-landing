import ContactForm from "./components/ContactForm";

export default function Home() {
  const questions = [
    "Почему при хороших продажах снова нет денег?",
    "Сколько денег можно безопасно вывести из бизнеса?",
    "Хватит ли средств на покупку оборудования?",
    "Почему растёт оборот, а прибыль не увеличивается?",
    "Стоит ли сейчас открывать новый филиал?",
    "Какая у бизнеса реальная рентабельность?",
  ];

  const problems = [
    {
      title: "Продажи растут, а денег нет",
      text: "Выручка увеличивается, но свободных денег в бизнесе больше не становится.",
    },
    {
      title: "Решения принимаются на глаз",
      text: "Покупки, инвестиции и выплаты собственнику не опираются на расчёты.",
    },
    {
      title: "Прибыль есть только на бумаге",
      text: "Бухгалтерская отчётность не показывает реальную картину бизнеса.",
    },
    {
      title: "Нет понимания будущих платежей",
      text: "Кассовые разрывы становятся неожиданностью и мешают работе компании.",
    },
    {
      title: "Непонятно, сколько можно вывести",
      text: "Деньги собственника смешиваются с деньгами бизнеса.",
    },
    {
      title: "Нет управленческой отчётности",
      text: "Собственник не видит прибыль, денежный поток и состояние бизнеса.",
    },
  ];

  const results = [
    {
      title: "Понимание реальной прибыли",
      text: "Вы будете видеть, сколько бизнес действительно заработал за месяц, а не только оборот и остаток денег на счёте.",
    },
    {
      title: "Контроль движения денег",
      text: "Станет понятно, откуда деньги поступают, куда уходят и какие платежи ожидаются впереди.",
    },
    {
      title: "Платёжный календарь",
      text: "Предстоящие выплаты будут запланированы заранее, а риск неожиданных кассовых разрывов снизится.",
    },
    {
      title: "Контроль расходов",
      text: "Вы увидите основные статьи затрат, отклонения от плана и расходы, которые снижают прибыль.",
    },
    {
      title: "Безопасные выплаты собственнику",
      text: "Станет понятно, сколько денег можно вывести из бизнеса без ущерба для текущей работы.",
    },
    {
      title: "Основа для управленческих решений",
      text: "Покупка оборудования, найм сотрудников, кредиты и развитие будут оцениваться на основе финансовых данных.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Финансовая диагностика",
      text: "Изучаем текущий учёт, движение денег, доходы, расходы и основные финансовые проблемы бизнеса.",
    },
    {
      number: "02",
      title: "Внедрение финансового учёта",
      text: "Определяем источники данных и настраиваем регулярный сбор финансовой информации.",
    },
    {
      number: "03",
      title: "Настройка отчётности",
      text: "Формируем отчёт о прибыли, движение денежных средств, платёжный календарь и другие необходимые отчёты.",
    },
    {
      number: "04",
      title: "Ежемесячное сопровождение",
      text: "Анализируем результаты, выявляем отклонения и готовим рекомендации для собственника.",
    },
  ];

  const trust = [
    {
      title: "20+ лет управленческого опыта",
      text: "Руководил коммерческими подразделениями, внедрял бизнес-процессы и финансовое управление.",
    },
    {
      title: "Практический опыт в МСБ",
      text: "Работал с производственными, торговыми и сервисными компаниями. Понимаю реальные проблемы собственников.",
    },
    {
      title: "Без сложной теории",
      text: "Внедряю понятные инструменты, которыми собственник будет пользоваться каждый месяц.",
    },
    {
      title: "Не бухгалтерский учёт, а управление бизнесом",
      text: "Цель — помочь принимать финансовые решения, а не просто формировать отчёты.",
    },
  ];

  const prices = [
    {
      title: "Финансовая диагностика",
      price: "40 000–80 000 ₸",
      description:
        "Для собственников, которым нужно понять текущее состояние финансов и определить дальнейший план действий.",
      items: [
        "Интервью с собственником",
        "Анализ текущего учёта",
        "Выявление финансовых проблем",
        "Рекомендации и план дальнейших действий",
      ],
    },
    {
      title: "Внедрение финансового управления",
      price: "400 000–900 000 ₸",
      description:
        "Полная постановка управленческого учёта и настройка системы финансовой отчётности.",
      items: [
        "Настройка ДДС, ОПиУ и Баланса",
        "Настройка справочников и шаблонов",
        "Подготовка рабочей Excel-модели",
        "Передача первого управленческого отчёта",
      ],
      featured: true,
    },
    {
      title: "Ежемесячное сопровождение",
      price: "150 000–350 000 ₸/месяц",
      description:
        "Регулярная работа с финансовыми данными и поддержка собственника при принятии решений.",
      items: [
        "Обновление финансовых отчётов",
        "Анализ результатов месяца",
        "Встреча с собственником",
        "Рекомендации по дальнейшим действиям",
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f8fa] text-[#172033]">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-12">
          <div>
            <div className="text-lg font-bold text-slate-900 sm:text-xl">FinControl</div>
            <div className="hidden text-xs text-slate-500 sm:block">
              Финансовое управление для бизнеса
            </div>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#problems" className="transition hover:text-blue-700">
              Услуги
            </a>
            <a href="#results" className="transition hover:text-blue-700">
              Результат
            </a>
            <a href="#process" className="transition hover:text-blue-700">
              Как работаем
            </a>
            <a href="#about" className="transition hover:text-blue-700">
              Обо мне
            </a>
            <a href="#contacts" className="transition hover:text-blue-700">
              Контакты
            </a>
          </nav>

          <a
            href="#contacts"
            className="shrink-0 rounded-lg bg-blue-700 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 sm:px-5 sm:py-3"
          >
            Записаться
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 md:gap-10 md:py-16 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:gap-14 lg:px-12">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 md:mb-5 sm:text-sm sm:tracking-[0.18em]">
            Финансовый директор для собственника бизнеса
          </p>

          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Принимайте решения на основе цифр, а не интуиции
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:mt-7 sm:text-lg sm:leading-8">
            Помогаю собственникам малого и среднего бизнеса видеть реальную
            прибыль, контролировать движение денег и принимать обоснованные
            управленческие решения. Работаю как внешний финансовый директор —
            без затрат на штатного специалиста.
          </p>

          <a
            href="#contacts"
            className="mt-6 inline-flex w-full justify-center rounded-xl bg-blue-700 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-800 md:mt-9 sm:w-auto sm:px-7"
          >
            Обсудить мой бизнес
          </a>

          <ul className="mt-4 max-w-xl space-y-1 text-sm leading-5 text-slate-500 md:mt-6 md:space-y-2 md:leading-6">
            <li className="flex items-start gap-1.5 md:gap-2">
              <span className="shrink-0 font-semibold text-blue-700">✓</span>
              <span>20+ лет управленческого опыта</span>
            </li>
            <li className="flex items-start gap-1.5 md:gap-2">
              <span className="shrink-0 font-semibold text-blue-700">✓</span>
              <span>Финансы, продажи и бизнес-процессы</span>
            </li>
            <li className="flex items-start gap-1.5 md:gap-2">
              <span className="shrink-0 font-semibold text-blue-700">✓</span>
              <span>Без сложных терминов и лишней теории</span>
            </li>
            <li className="flex items-start gap-1.5 md:gap-2">
              <span className="shrink-0 font-semibold text-blue-700">✓</span>
              <span>Работаю лично с собственником</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-xl shadow-slate-200/70 sm:rounded-3xl sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 sm:text-sm sm:tracking-[0.16em]">
            Знакомые вопросы?
          </p>

          <h2 className="mt-3 text-xl font-bold sm:text-2xl">
            Ответим на вопросы, которые волнуют собственника
          </h2>

          <div className="mt-6 space-y-4 sm:mt-7">
            {questions.map((question) => (
              <div key={question} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                  ✓
                </div>

                <p className="leading-7 text-slate-600">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="problems" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 sm:text-sm sm:tracking-[0.18em]">
              Проблемы бизнеса
            </p>

            <h2 className="mt-3 text-xl font-bold sm:text-2xl tracking-tight sm:mt-4 sm:text-4xl">
              Даже успешный бизнес может терять деньги
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Без финансового управления собственник видит отдельные цифры, но
              не понимает общую картину.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-5 sm:p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-xl font-bold text-red-600">
                  ↓
                </div>

                <h3 className="text-xl font-bold">{problem.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="bg-[#f7f8fa] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 sm:text-sm sm:tracking-[0.18em]">
              Результат внедрения
            </p>

            <h2 className="mt-3 text-xl font-bold sm:text-2xl tracking-tight sm:mt-4 sm:text-4xl">
              Что добавится после внедрения контроля за финансами
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              У собственника появится понятная финансовая система, которая
              показывает реальное состояние бизнеса и помогает принимать
              обоснованные решения.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <div
                key={result.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-700">
                  ✓
                </div>

                <h3 className="text-xl font-bold">{result.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">{result.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 sm:text-sm sm:tracking-[0.18em]">
              Этапы работы
            </p>

            <h2 className="mt-3 text-xl font-bold sm:text-2xl tracking-tight sm:mt-4 sm:text-4xl">
              Как проходит работа
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Двигаемся последовательно: сначала разбираемся в текущей ситуации,
              затем внедряем систему и сопровождаем её работу.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-5 sm:p-6"
              >
                <div className="text-sm font-bold tracking-[0.2em] text-blue-700">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f7f8fa] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 sm:text-sm sm:tracking-[0.18em]">
              Почему мне доверяют
            </p>

            <h2 className="mt-3 text-xl font-bold sm:text-2xl tracking-tight sm:mt-4 sm:text-4xl">
              Практический подход к финансовому управлению
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Работа строится вокруг задач собственника, понятных цифр и решений,
              которые можно применять в реальном бизнесе.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
            {trust.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-700">
                  ✓
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 sm:text-sm sm:tracking-[0.18em]">
              Стоимость услуг
            </p>

            <h2 className="mt-3 text-xl font-bold sm:text-2xl tracking-tight sm:mt-4 sm:text-4xl">
              Форматы работы
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Итоговая стоимость зависит от размера компании, качества исходных
              данных и объёма необходимой работы.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
            {prices.map((item) => (
              <div
                key={item.title}
                className={`flex h-full flex-col rounded-2xl border p-5 sm:p-7 ${
                  item.featured
                    ? "border-blue-700 bg-blue-700 text-white shadow-xl shadow-blue-200/70"
                    : "border-slate-200 bg-[#f7f8fa]"
                }`}
              >
                {item.featured && (
                  <div className="mb-5 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
                    Основная услуга
                  </div>
                )}

                <h3 className="text-xl font-bold sm:text-2xl">{item.title}</h3>

                <div
                  className={`mt-5 text-xl font-bold sm:text-2xl ${
                    item.featured ? "text-white" : "text-blue-700"
                  }`}
                >
                  {item.price}
                </div>

                <p
                  className={`mt-4 leading-7 ${
                    item.featured ? "text-blue-100" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>

                <div className="mt-6 space-y-4 sm:mt-7">
                  {item.items.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div
                        className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          item.featured
                            ? "bg-white/15 text-white"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        ✓
                      </div>

                      <p
                        className={`leading-7 ${
                          item.featured ? "text-blue-50" : "text-slate-600"
                        }`}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contacts"
                  className={`mt-7 inline-flex w-full justify-center rounded-xl px-6 py-4 text-center font-semibold transition sm:mt-8 ${
                    item.featured
                      ? "bg-white text-blue-700 hover:bg-blue-50"
                      : "bg-blue-700 text-white hover:bg-blue-800"
                  }`}
                >
                  Обсудить задачу
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-[#172033] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-300 sm:text-sm sm:tracking-[0.18em]">
              Финансовая диагностика
            </p>

            <h2 className="mt-3 text-xl font-bold sm:text-2xl tracking-tight sm:mt-4 sm:text-4xl">
              Обсудим финансовую ситуацию вашего бизнеса
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
              Оставьте заявку. На первой встрече разберём текущую ситуацию,
              определим основные финансовые проблемы и формат дальнейшей работы.
            </p>

            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-300">
                  ✓
                </div>
                <p className="leading-7">Разберём, какие данные уже есть в компании.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-300">
                  ✓
                </div>
                <p className="leading-7">Определим, какие отчёты нужны собственнику.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-300">
                  ✓
                </div>
                <p className="leading-7">Согласуем следующий практический шаг.</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-[#111827] text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-12">
          <div>
            <div className="text-lg font-bold text-white">FinControl</div>
            <p className="mt-1 text-sm text-slate-400">
              Финансовое управление для малого и среднего бизнеса
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm sm:justify-end sm:gap-x-6">
            <a href="#problems" className="transition hover:text-white">
              Услуги
            </a>
            <a href="#results" className="transition hover:text-white">
              Результат
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