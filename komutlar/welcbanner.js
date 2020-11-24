const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("#fffff1")
  .setImage("https://media.discordapp.net/attachments/768948087154540586/775033363277938738/PicsArt_09-15-11.02.37.png?width=1014&height=406")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'welcb',
  description: '',
  usage: 'welcbanner'
};