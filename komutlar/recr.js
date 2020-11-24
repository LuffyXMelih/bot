const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription("**__Hello dear community \n we are looking for experienced players and we are looking for :__** \n \n **_- iPad 60/120 FPS_ \n _- Good Past Clans_ \n _- Good Scrim SS_ \n _- Able to VC_ \n _- Loyal Active_ \n _- Active_** \n \n **__For reference dm__** <@&764412428946505728>")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'recr',
  description: '',
  usage: 'recr'
};