const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "ntah",
  description: "Sending a ntah embedded photo",
  async execute(message) {
    const ntah_img = await getNekoImage("shrug");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:thinking: **${message.author.username}** gak tau`)
      .setImage(ntah_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
