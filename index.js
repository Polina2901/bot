const TelegramBot = require('node-telegram-bot-api')

const TOKEN = process.env.TLGTOKEN

const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/\/bells/, (msg, match) => {
	bot.sendMessage(`@puteshestvuyseichas` , 
`9:15-9:55
 10:05-10:45
 11:00-11:40
 11:55-12:35
 12:50-13:30
 13:40-14:20
 14:35-15:15
 15:20-16:00`)
})

bot.onText(/\/event/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `i have to remind you of event `+(msg.text.match(/\/event(.*) [0-9]{1,2}\.[0-9]{1,2}\.[0-9]{2,4}\.[0-9]{1,2}\.[0-9]{1,2}/)[1])+
	` that happens on hour ` +(msg.text.match(/\/event.* [0-9]{1,2}\.[0-9]{1,2}\.[0-9]{2,4}\.([0-9]{1,2})\.[0-9]{1,2}/)[1])
	` on minute ` +(msg.text.match(/\/events.* [0-9]{1,2}\.[0-9]{1,2}\.[0-9]{2,4}\.[0-9]{1,2}\.([0-9]{1,2})/)[1])
	
	
	)
})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}`)
})




