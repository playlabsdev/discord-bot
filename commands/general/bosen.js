const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "bosen",
  description: "Sending a bosen embedded photo",
  async execute(message) {
    const bosen_img = await getNekoImage("bored");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:disappointed: **${message.author.username}** bosen nih`)
      .setImage(bosen_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
