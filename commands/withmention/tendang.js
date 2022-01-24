const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "tendang",
  description: "Sending a tendang embedded photo",
  async execute(message, mentioned) {
    const tendang_img = await getWaifuImage("kick");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:foot: **${message.author.username}** nendang **${mentioned.username}**`
      )
      .setImage(tendang_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
