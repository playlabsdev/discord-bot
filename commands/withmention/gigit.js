const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "gigit",
  description: "Sending a gigit embedded photo",
  async execute(message, mentioned) {
    const hai_img = await getWaifuImage("wave");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:hand_splayed: **${message.author.username}** : hai **${mentioned.username}**`
      )
      .setImage(hai_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
