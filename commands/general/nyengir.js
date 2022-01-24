const { MessageEmbed } = require("discord.js");

const nyengir = require("../../data/nyengir.json").nyengir;

module.exports = {
  name: "nyengir",
  description: "Sending a nyengir embedded photo",
  execute(message) {
    const nyengir_img = nyengir[Math.floor(Math.random() * nyengir.length)];
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:grin: **${message.author.username}** : Muhehehehehe `)
      .setImage(nyengir_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
