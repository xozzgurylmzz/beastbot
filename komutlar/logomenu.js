const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Beast BOT")
.setTitle(" Logo Maker Komutları")
 .setTimestamp()
.setDescription("**!alev** = Alev fontlu bir logo oluşturursunuz.  \n  **!altın** = Altın fontlu bir logo oluşturursunuz. \n  **!anime** = Anime fontlu bir logo oluşturursunuz.  \n  **!arrow** = Arrow fontlu bir logo oluşturursunuz.  \n  **!basit** = Basit bir logo oluşturursunuz.  \n  **!dinamik** = Dinamik bir logo oluşturursunuz.    \n  **!elmas** = Elmas fontlu bir logo oluşturursunuz.  \n  **!green** = Yeşil temalı bir logo oluşturursunuz.  \n  **!habbo** = Habbo fontlu bir logo oluşturursunuz.  \n  **!kalın** = Kalın bir logo oluşturursunuz.  \n  **!red** = Kırmızı fontlu bir logo oluşturursunuz.  \n  **!neonmavi** = Mavi Neon fontlu bir logo oluşturursunuz. \n  **!sarı** = Sarı bir logo oluşturursunuz.")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logomenü',
  category: 'logomenü',
  description: 'Yardım Menüsü.',
   usage:'!logomenü'
}