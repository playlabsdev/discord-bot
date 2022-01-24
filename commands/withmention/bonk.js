const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "bonk",
  description: "Sending a bonk embedded photo",
  async execute(message, mentioned) {
    const bonk_img = await getWaifuImage("bonk");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:field_hockey: **${message.author.username}** ngebonk **${mentioned.username}**`
      )
      .setImage(bonk_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
