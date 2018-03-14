// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.login(config.token);

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log('I\'m Online'); 
});

client.on("message", message => {
	if(message.author.bot) return;

	var testing = message.content;

	message.channel.send("U've said: " + testing);
});