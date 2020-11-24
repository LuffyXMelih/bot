const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setThumbnail("https://media.discordapp.net/attachments/750332558037876787/777664011344674836/PicsArt_10-01-10.37.11.jpg?width=406&height=406")
  .setDescription("*s*") 
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'welc',
  description: '',
  usage: 'welc'
};