const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!horarios') {
		message.channel.send('Horarios.');
	}
});

client.login("token");//ODQ1MzU0MjM3MjE1MjQ0Mjk4.YKfvfA.WLEfJaehv5A3bn2KmGHkHQoZ_8o