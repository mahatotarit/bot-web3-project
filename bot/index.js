let telegram_bot_token = '6309421104:AAH6YgbyU9lDZ8xAP4aN59UpW2C-sY7Iog0';

const TelegramBot = require('node-telegram-bot-api');
const keep_alive = require('./server.js');
const bot = new TelegramBot(telegram_bot_token, { polling: true });

let web_button;
let web_url = "https://messfinder.com";

// first time start
bot.onText(/\/start(?: (.+))?/, async (msg, match) => {
    const chatId = msg.chat.id;
    const refferal_id = match && match[1] ? match[1].trim() : null;

    let web_button_url = web_url + '?id=' + refferal_id +"&user="+chatId;

    web_button = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Web',
              web_app: {
                url: web_button_url,
              },
            },
          ],
        ],
      },
    };

    bot.sendMessage(chatId, '🙏 Welcome to MSN sale bot').then( () =>{
      bot.sendMessage(chatId, 'Click to buy MSN token', web_button);
    })
});

bot.on('message',(msg) => {
  const chatId = msg.chat.id;

  let web_button_url_1 = web_url + '?id=null' + '&user=' + chatId;

  web_button = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Web',
            web_app: {
              url: web_button_url_1,
            },
          },
        ],
      ],
    },
  };

  bot.sendMessage(chatId, 'Click to buy MSN token',web_button);
});