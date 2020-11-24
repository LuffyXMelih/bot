const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const rank = args[0]
  if (!rank) return message.reply('Rütbeni Yazmalısın !');
  const ignn = message.content.split(' ').slice(2)
  const ign = ignn.join("")
  if (!ign) return message.reply('Oyun İçi Adını Yazmalısın !');
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setColor("#fffff1")
    .setDescription(`**<@${message.author.id}>** Parti Arıyor.. 🔍 \n **Rütbe :** ${rank} \n **IGN : **\`${ign}\``)
    message.channel.send(embed)
  message.delete()
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'parti-ara',
  description: '',
  usage: '>parti-ara [Rütbe] [IGN]'
};