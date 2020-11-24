const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const roster = new Discord.MessageEmbed()
  .setColor("#fffff1")
  .setThumbnail("https://media.discordapp.net/attachments/768948087154540586/775038519806656522/IMG-20200919-WA0000.jpg?width=472&height=472")
  .setTitle("<a:agangkral:778630515209011240>  **Visory Roster**  <a:agangkral:778630515209011240>")
  .setDescription("`Management` \n <:vsrytr:778612161643675698>  | **Luffy** \n \n `Competitive` \n <:vsrytr:778612161643675698>  | **xWargrave** (C)\n <:vsryaze:778627093822963713>  | **NanobosS** \n <:vsryaze:778627093822963713>  | **AstroyaS** \n <:vsrytr:778612161643675698>  | **Keented** \n <:vsrytr:778612161643675698>  | **Holigan** \n <:vsrytr:778612161643675698>  | **Ghoose** \n <:vsryuk:778794061917061130>  | **Swiped** \n <:vsrytr:778612161643675698>  | **Aktifex** \n <:vsrytr:778612161643675698>  | **Jawe X** \n <:vsrybelgium:778793749223833630>  | **S1mple** \n <:vsrytr:778612161643675698>  | **Coxing** \n <:vsrytr:778612161643675698>  | **Oscar** \n <:vsrytr:778612161643675698>  | **Firs** \n <:vsrytr:778612161643675698>  | **xAk**") 
  message.channel.send(roster)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roster',
  description: '',
  usage: 'roster'
};