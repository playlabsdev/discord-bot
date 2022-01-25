const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "malu",
  description: "Sending a malu embedded photo",
  async execute(message) {
    const malu_img = await getWaifuImage("blush");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:blush: **${message.author.username}** malu-malu`)
      .setImage(malu_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
