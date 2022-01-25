const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "nangis",
  description: "Sending a nangis embedded photo",
  async execute(message) {
    const nangis_img = await getNekoImage("cry");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:sob: **${message.author.username}** sedih gara-gara kamu`
      )
      .setImage(nangis_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
