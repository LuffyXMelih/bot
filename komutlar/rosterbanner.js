const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("#fffff1")
  .setImage("https://media.discordapp.net/attachments/698624059814182992/776377414170968064/image0.gif")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rosterb',
  description: '',
  usage: 'rosterbanner'
};