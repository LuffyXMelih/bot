const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("#fffff1")
  .setTitle("Beni Sunucuna Ekle")
  .setDescription("[__**Davet Et !**__](https://discord.com/oauth2/authorize?client_id=778564765152444437&scope=bot&permissions=8) \n\n [__**Visory Clan Server**__](https://discord.gg/rfsBbtpUU4)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'dvt',
  usage: 'davet'
};