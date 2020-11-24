const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fffff1")
.setTitle("\<a:atikbeyaz:779007126881566761> **・ Visory Matchmaking ・** \<a:atikbeyaz:779007126881566761>")
.setDescription("**>scrim-ara** = Scrim aramak için kullanılır. \n **Örnek** = >scrim 5v5 not \n ------------------------------------------------ \n **>parti-ara** = Parti aramak için kullanılır. \n **Örnek** = >parti-ara \<:master:779604478759534603> MyNick \n ------------------------------------------------")
.addField('>scrim-ara', '- Format \n - Not',true)
.addField('>parti-ara', '- Rütbe \n - IGN',true)
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'matchmaking',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'yardım'
}