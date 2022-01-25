const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "bingung",
  description: "Sending a bingung embedded photo",
  async execute(message) {
    const bingung_img = await getNekoImage("think");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:confused: **${message.author.username}** kebingungan`)
      .setImage(bingung_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
