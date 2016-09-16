var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {
    if (msg.content.startsWith("ping")) {
        msg.channel.sendMessage("pong!");
    }
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login("MjI1NDIxODIyNTcxNzA4NDE4.CrySNA.a1pl4C5ManlnDhcgDtw3sa96J6w");