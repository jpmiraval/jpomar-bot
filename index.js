const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!horarios') {
		message.channel.send('Pingaloca');
	}
	
	else if (message.content === '!omar') {
		message.channel.send('OMARPINGA');
	}
	
	else if (message.content === '!orkito') {
		message.channel.send('ROKOTOOOOOOOOOOOOOOOOOO');
	}
	
});

client.login("ODQ1MzU0MjM3MjE1MjQ0Mjk4.YKfvfA.jnU1Vuz0e9MAcVkSkzyqjtQI8XA");