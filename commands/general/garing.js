const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "garing",
  description: "Sending a garing embedded photo",
  async execute(message) {
    const garing_img = await getWaifuImage("cringe");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:neutral_face: **${message.author.username}** : cringe beut iyuh`
      )
      .setImage(garing_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
