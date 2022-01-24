const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "mutung",
  description: "Sending a mutung embedded photo",
  async execute(message) {
    const mutung_img = await getNekoImage("pout");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:triumph: **${message.author.username}** ngambek gara-gara kamu`
      )
      .setImage(mutung_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
