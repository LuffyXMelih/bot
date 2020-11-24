const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const format = args[0]
  if (!format) return message.reply('Scrim Formatını Yazmalısın !');
  const note = message.content.split(' ').slice(2)
  const not = note.join("")
  message.delete()
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setColor("#fffff1")
    .setDescription(`**<@${message.author.id}>** Scrim Arıyor.. 🔍 \n **Format :** ${format} \n **NOT : **\`${not}\``)
    message.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'scrim-ara',
  description: 'scrim',
  usage: '>scrim-ara [Format] [Not]'
};