const Telegraf = require('telegraf');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);


app.get('/', function (request, response) {
	response.send('avsimach telegraf bot');
});

app.get('/testkek', function (request, response) {
	console.log('in keks >>>');
	response.send('keks is working!');
});

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears(/привет/i, (ctx) => ctx.reply('Дружок-пирожок, тобой выбрана неправильная дверь'));

bot.startPolling();

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
