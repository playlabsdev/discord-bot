const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "mantap",
  description: "Sending a mantap embedded photo",
  async execute(message) {
    const mantap_img = await getNekoImage("thumbsup");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:thumbsup: **${message.author.username}** bilang kamu mantap`
      )
      .setImage(mantap_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
