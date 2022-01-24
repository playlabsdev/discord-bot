const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "tampar",
  description: "Sending a tampar embedded photo",
  async execute(message, mentioned) {
    const tampar_img = await getWaifuImage("slap");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:hand_splayed: **${message.author.username}** nampar **${mentioned.username}**`
      )
      .setImage(tampar_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
