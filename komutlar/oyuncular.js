const Gamedig = require('gamedig');
const moment = require("moment");
const Discord = require("discord.js");
exports.run = (client, message, args) => {


    let prooyun = "208.103.169.219"
Gamedig.query({
    type: 'garrysmod',
    host: prooyun
}).then((state) => {
    let sa = state.players.map(x => `${x.name}`).join("\n------------------------\n")
message.channel.send(sa, { code: 'diff' }).catch(err => message.channel.send(`:x: Sunucu bilgilerini alırken bir hata oluştu.`))
}).catch((error) => {
    message.channel.send(":x: Sunucu Kapalı.");
})
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };
  
  exports.help = {
    name: 'oyuncular',
    description: 'oyuncular',
    usage: 'oyuncular'
  };