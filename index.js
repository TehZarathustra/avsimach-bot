const Telegraf = require('telegraf');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

app.get('/testkek', function (request, response) {
	console.log('in keks >>>');
	response.send('keks is working!');
});

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'));

bot.startPolling();

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
