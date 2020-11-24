const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("#fffff1")
.setTitle("<a:adans:779004854755655711> **・ Visory Eğlence ・** <a:aDancePanda:779004894249746432>")
.setDescription("<a:aelegard_beyazok:779004012992921630>・**>tersyazı** = Bir Yazıyı Bot Ters Yazar. \n <a:aelegard_beyazok:779004012992921630>・**>mcskin** = Yazdığınız ismin minecraft görünüşünü atar. \n <a:aelegard_beyazok:779004012992921630>・**>fbi** = Bot FBi Gif Atar. \n <a:aelegard_beyazok:779004012992921630>・**>düello** = Düello Atarsın. \n <a:aelegard_beyazok:779004012992921630>・**>wasted** = Polis tarafından yakalanırsın. \n <a:aelegard_beyazok:779004012992921630>・**>atatürk** = Dene ve gör... (1881-1938)")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}