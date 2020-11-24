const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("#fffff1")
.setTitle("<a:aDiamond:779567385027543043> **・ Visory Kullanıcı ・** <a:aDiamond:779567385027543043>")
.setDescription("<a:adiamond:779567337992880158>・**>avatar** = Avatarınıza bakarsınız. \n <a:adiamond:779567337992880158>・**>yetkilerim** = Yetkilerini görürsün. \n <a:adiamond:779567337992880158>・**>profil** = Profilini görürsün. \n <a:adiamond:779567337992880158>・**>sunucuresmi** = Sunucu resmini gösterir. \n <a:adiamond:779567337992880158>・**>ping** = Botun Pingine Bakarsın. \n <a:adiamond:779567337992880158>・**>id** = Birisinin id'sine Bakarsın.\n <a:adiamond:779567337992880158>・**>davet** = Beni Sunucuna Ekle. \n <a:adiamond:779567337992880158>・**>botbilgi** = Bot istatistiklerini görürsünüz. \n <a:adiamond:779567337992880158>・**>bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir.")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}