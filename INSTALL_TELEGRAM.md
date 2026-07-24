# Подключение заявок к Telegram

В проект уже добавлены:

- `app/api/contact/route.ts` — серверная отправка заявки в Telegram;
- `app/components/ContactForm.tsx` — рабочая форма;
- обновлённый `app/page.tsx`.

В Vercel должны быть сохранены переменные:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Перед тестом откройте бота в Telegram и нажмите **Start**.

После копирования файлов в проект выполните:

```bash
git add .
git commit -m "Добавлена отправка заявок в Telegram"
git push
```

После публикации откройте сайт и отправьте тестовую заявку.
