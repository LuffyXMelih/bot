const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("#fffff1")
.setTitle("<a:aelmas:779006613918187550> **・ Visory Logo ・** <a:aelmas:779006613918187550>")
.setDescription("<a:atikbeyaz:779007126881566761>・**>dinamik** = Dinamik logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>altın** = Altın logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>banner** = Banner logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>basit** = Basit logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>elmas** = Elmas logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>sarı** = Sarı logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>neonmavi** = Neon mavi logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>kalın** = Kalın logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>anime** = Anime yazı tipinde logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>habbo** = Habbo yazı tipinde logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>arrow** = Ok işaretli logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>green** = Yeşil logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>alev** = Alevli logo oluşturur. \n <a:atikbeyaz:779007126881566761>・**>red** = Kırmızı logo oluşturur.")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}