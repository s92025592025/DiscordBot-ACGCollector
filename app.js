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

	var content = message.content;

	// regex for exhentai
	var exhentaiREG = /https:\/\/exhentai\.org\/\g\/[0-9]+\/[0-9a-z]+\/(\?p=[0-9]+)?/g;
	// regex for pixiv
	var pixivREG = /https:\/\/www\.pixiv\.net\/member_illust\.php\?mode=medium&illust_id=[0-9]+/g;
	// regex for twitter
	var twitterREG = /https:\/\/twitter\.com\/[a-zA-z0-9]+\/status\/[0-9]+/g;
	// regex for youtube
	var youtubeREG = /https:\/\/www\.youtube\.com\/[0-9a-zA-Z\?=]+/;
	// regex for pics
	var picREG = /[a-zA-Z0-9]+((\.jpg)|(\.jpeg)|(\.png)|(\.gif))/i;
	// start of 18+ channel
	var rainbowChannel = "431710252069814272";

	
	var exhentaiChannel = client.channels.get("423287490384887828");
	var pixivChannel = client.channels.get("423287514049019906");
	var twitterChannel = client.channels.get("423287551386976256");
	var picChannel = client.channels.get("423287762314330162");
	var youtubeChannel = client.channels.get("423344124423438336");
	var r18Channel = client.channels.get("433510456917753857");


	if (message.channel.id == rainbowChannel && message.attachments.size > 0) {
		var pics = [];
		var attachIt = message.attachments.values();
		var attachValue = attachIt.next();
		
		while(!attachValue.done){
			if(picREG.test(attachValue.value.filename)){
				pics.push(attachValue.value.url);
			}

			attachValue = attachIt.next();
		}


		r18Channel.send(message.author + " sent a picture: ", {files: pics});
		
		return ;
	}


	if(exhentaiREG.test(content)){
		var links = content.match(exhentaiREG);

		for(var i = 0; i < links.length; i++){
			exhentaiChannel.send(message.author + " sent a link: " + links[i]);
		}

		return;
	}

	if(pixivREG.test(content)){
		var links = content.match(pixivREG);

		for(var i = 0; i < links.length; i++){
			pixivChannel.send(message.author + " sent a link: " + links[i]);
		}

		return;
	}

	if(twitterREG.test(content)){
		var links = content.match(twitterREG);

		for(var i = 0; i < links.length; i++){
			twitterChannel.send(message.author + " sent a link: " + links[i]);
		}

		return;
	}

	if(youtubeREG.test(content)){
		var links = content.match(youtubeREG);

		for(var i = 0; i < links.length; i++){
			youtubeChannel.send(message.author + " sent a link: " + links[i]);
		}

		return;
	}

	if(message.attachments.size > 0){
		var pics = [];
		var attachIt = message.attachments.values();
		var attachValue = attachIt.next();
		
		while(!attachValue.done){
			if(picREG.test(attachValue.value.filename)){
				pics.push(attachValue.value.url);
			}

			attachValue = attachIt.next();
		}


		picChannel.send(message.author + " sent a picture: ", {files: pics});
		
		return ;
	}
});