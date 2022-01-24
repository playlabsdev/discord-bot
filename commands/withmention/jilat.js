const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "jilat",
  description: "Sending a jilat embedded photo",
  async execute(message, mentioned) {
    const jilat_img = await getWaifuImage("lick");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:tongue: **${message.author.username}** ngejilat **${mentioned.username}**`
      )
      .setImage(jilat_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
