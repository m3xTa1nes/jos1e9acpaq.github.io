const TelegramBot = require('node-telegram-bot-api');

const BOT_TOKEN = '7983725176:AAGkGy0KbTxgph-JBGm5SOaKSzaeMP2ERLQ';

// Создаем экземпляр бота
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {});

