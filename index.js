const Commando = require("discord.js-commando");
const Discord = require("discord.js");
const bot = new Commando.Client()

const TOKEN = "NDkzNDA1MDU1OTAzMzM0NDEw.DoqNiw.JRcvoGucIkEpGZ9hgKnbajaEkrk"
console.log(bot.registry.registerGroup)


bot.registry.registerGroup("simple", "Simple");
bot.registry.registerGroup("admin", "Admin");
bot.registry.registerGroup("music", "Music");
bot.registry.registerDefaults()
bot.registry.registerCommandsIn(__dirname + "/commands");

client.on("message", function(message){
    if(message.content == "hello")
    {
        message.reply("hello, how are you?")
    }
    
});
client.on("message", function(message){
    if(message.content == "Hello")
    {
        message.reply("hello, how are you?")
    }
    bot.on('ready',function(){
        console.log("Ready");      
      });   
});
client.on("guildMemberAdd", function (member)
{
    member.send("welcome to the server!")
    let memberRole = member.guild.roles.find("name", "newbie");
    member.addRole(memberRole);
});



client.login(process.env.BOT_TOKEN)
