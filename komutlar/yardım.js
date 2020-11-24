const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fffff1")
.setTitle("<a:atamir:778979649622900756> **・ Visory Yardım ・** <a:atamir:778979649622900756>")
.setDescription("`Komutlar :`\n\n" + "<a:aDelmas:778980303518957568>・**>moderasyon** = Moderasyon komutlarını görüntülersiniz. \n \n <a:aDelmas:778980303518957568>・**>eğlence** = Eğlence komutlarını görüntülersiniz. \n \n <a:aDelmas:778980303518957568>・**>kullanıcı** = Kullanıcı komutlarını görüntülersiniz. \n \n <a:aDelmas:778980303518957568>・**>logo** = Logo komutlarını görüntülersiniz. \n \n <a:aDelmas:778980303518957568>・**>matchmaking** = Matchmaking komutlarını görüntülersiniz.")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'yardım'
}