const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "tidur",
  description: "Sending a tidur embedded photo",
  async execute(message) {
    const tidur_img = await getNekoImage("sleep");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:sleeping: **${message.author.username}** lagi bobo`)
      .setImage(tidur_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
