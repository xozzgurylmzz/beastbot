const Gamedig = require('gamedig');
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let kisi = client.users.cache.get(message.author.id)
let ip = "208.103.169.219"
Gamedig.query({
    type: 'garrysmod',
    host: ip
}).then((state) => {
    const embed = new Discord.MessageEmbed()
    embed.setAuthor(state.name, client.user.displayAvatarURL())
    .setColor("#275bff")
    .addField("Sunucu Adresi", ip)
    .addField("Oyuncu Sayısı", `${state.raw.numplayers} / ${state.maxplayers}`)
    .addField("Harita", state.map)
    .addField("Tıkla Bağlan", ` steam://connect/${state.connect}`)
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(kisi.tag, kisi.displayAvatarURL({dynamic:true}))
    .setTimestamp()
message.channel.send(embed) 
}).catch((error) => {
    message.channel.send(":x: Sunucu Bakımda!");
})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };
  
  exports.help = {
    name: 'ip',
    usage: 'ip',
    usage: 'ip'
  };