const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "genit",
  description: "Sending a genit embedded photo",
  async execute(message) {
    const genit_img = await getWaifuImage("wink");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:kissing_closed_eyes: **${message.author.username}** genit banget`
      )
      .setImage(genit_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
