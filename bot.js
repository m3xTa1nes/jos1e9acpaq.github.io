const TelegramBot = require('node-telegram-bot-api');

const BOT_TOKEN = '7983725176:AAGkGy0KbTxgph-JBGm5SOaKSzaeMP2ERLQ';
const WEB_APP_URL = 'https://m3xta1nes.github.io/';

// Создаем экземпляр бота
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, async (msg) => {
    await bot.sendMessage(msg.chat.id, '', {
        reply_markup: {
          keyboard: [
            [
              {
                text: 'Открыть мини-приложение', 
                web_app: { url: WEB_APP_URL }
              }
            ]
          ],
          resize_keyboard: true,
          one_time_keyboard: true
        }
      });
});
