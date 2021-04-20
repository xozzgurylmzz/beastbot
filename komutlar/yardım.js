const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("YELLOW")
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `!botbilgi` **Yazarak Botun İstatistiklerine Ulaşabilirsiniz.**"
    )
    .addField(
      `➤ Komutlar`,
      `
 
:white_small_square: | **!eğlence:** Eğlence menüsüne bakarsınız.
:white_small_square: | **!kullanıcı:** Kullanıcı komutlarına bakarsınız.
:white_small_square: | **!logomenü:** Botun logo yapma komutlarına bakarsınız. 

`)


    .addField(
      "➤ Yardım & Hata & Bug  \n",
      ":white_small_square: | **!bug-bildir** "
    )

    .addField(
      `   Bilgilendirme`,
      `
:white_small_square: | **Botumuz her gün güncellenmektedir.**.
:white_small_square: | **Beast Roleplay Ekibi iyi günler diler.** `
    )
  
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
