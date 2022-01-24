const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "coklat",
  description: "Sending a coklat auto message",
  execute(message) {
    let coklat = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:chocolate_bar:  **Ada yang bilang coklat?**`)
      .setImage(
        "https://i.pinimg.com/originals/68/d9/fc/68d9fcbcc7cc1d8c1c1015b3dbc5c4ee.gif"
      );
    message.channel.send({ embeds: [coklat] });
  },
};
