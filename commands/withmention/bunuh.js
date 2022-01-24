const { MessageEmbed } = require("discord.js");

const { getWaifuImage } = require("../../utils/fetchImage");

module.exports = {
  name: "bunuh",
  description: "Sending a bunuh embedded photo",
  async execute(message, mentioned) {
    const bunuh_img = await getWaifuImage("kill");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:drop_of_blood: Inna lillahi wainna ilaihi roji'un, **${mentioned.username}** dibunuh **${message.author.username}**`
      )
      .setImage(bunuh_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
