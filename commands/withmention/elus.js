const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "elus",
  description: "Sending a elus embedded photo",
  async execute(message, mentioned) {
    const elus_img = await getNekoImage("pat");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:smiling_face_with_3_hearts: **${message.author.username}** ngelus **${mentioned.username}**, gemes~`
      )
      .setImage(elus_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
