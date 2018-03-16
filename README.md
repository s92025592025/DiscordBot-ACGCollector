# DiscordBot-ACGCollector
## Objective
Collect likns from specific website by forwarding them to a designated channel.

## Necessary Files and Package
Get `discord.js` by
```
npm install discord.js
```
Setup `config.json` for bot credentials
```
{ 
    "token"  : "[Replace this for the token of your bot]",
    "prefix" : "+"
}
```

## Usage
Run `node app.js` under a connected network. For Rasbian on boot `.service` file, make sure it is executed after `network.service`.