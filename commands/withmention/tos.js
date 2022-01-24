const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "tos",
  description: "Sending a tos embedded photo",
  async execute(message, mentioned) {
    const tos_img = await getWaifuImage("highfive");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `**${message.author.username}** :raised_hands: **${mentioned.username}**`
      )
      .setImage(tos_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
