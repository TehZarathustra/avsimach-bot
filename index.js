const Telegraf = require('telegraf');
const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

app.use(cors());

app.get('/', function (req, res) {
	res.send('avsimach telegraf bot');
});

app.get('/testkek', function (req, res) {
	console.log('in keks >>>');
	res.send('keks is working!');

	bot.telegram.sendMessage(process.env.TEST_CHAT, 'keks');
});

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.hears(/привет|hi/i, ctx => {
	console.log('ctx >', ctx.chat);
	ctx.reply('Дружок-пирожок, тобой выбрана неправильная дверь')
});

bot.startPolling();

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
