const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** <a:Yldz:742698148329291826>`)
  const linqo = `https://habbofont.net/font/shalimar_big/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("#fffff1")
  .setImage(linqo)
  .setFooter('Kalın Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'kalın',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'kalın <yazı>'
}