const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === ':ping') {
    	message.reply('Pong!');
        client.on('message', message => {
    if (message.content === 'LOL') {
    	message.reply('Witty banter innit m8!');
         client.on('message', message => {
    if (message.content === 'memes') {
    	message.reply('MEMEMEMEMEMEMEMEMEMES!');
         client.on('message', message => {
    if (message.content === 'EXPELLIARMUS!') {
    	message.reply('Hahaha! YOU ARE A SQUIB!'); client.on('message', message => {
    if (message.content === ':info') {
    	message.reply('message.channel.send({embed: {
  color: 3447003,
  description: "Oops! You caught me changing!"
}});');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
