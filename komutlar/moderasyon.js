const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("#fffff1")
.setTitle("<a:atamir:778979649622900756> **・ Visory Moderasyon ・** <a:atamir:778979649622900756>")
.setDescription("<a:abeyazkalp:779001483277631549>・**>sil** = Yazdığınız miktarda mesajı siler. \n<a:abeyazkalp:779001483277631549>・**>ban** = Etiketlediğiniz kişiyi banlarsınız. \n<a:abeyazkalp:779001483277631549>・**>kick** = Etiketlediğiniz kişiyi atarsınız. \n<a:abeyazkalp:779001483277631549>・**>duyuru** = Bota duyuru yaptırırsınız. \n<a:abeyazkalp:779001483277631549>・**>küfür** = Küfür engel sistemini açarsınız. \n<a:abeyazkalp:779001483277631549>・**>reklam** = Reklam engel sistemi açarsınız. \n<a:abeyazkalp:779001483277631549>・**>slowmode** = Yavaş modu ayarlarsınız. \n<a:abeyazkalp:779001483277631549>・**>forceban** = Birisine id ban atarsınız. \n<a:abeyazkalp:779001483277631549>・**>unban** = Birisinin banını açarsınız. \n<a:abeyazkalp:779001483277631549>・**>sa-as** = Bot biri sa dedimi cevap verir. \n<a:abeyazkalp:779001483277631549>・**>sunucubilgi** = Sunucu bilgilerini görürsün. \n<a:abeyazkalp:779001483277631549>・**>üyedurum** = Üyelerin durumlarını görürsün.")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}