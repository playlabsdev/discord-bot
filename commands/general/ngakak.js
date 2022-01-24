const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "ngakak",
  description: "Sending a ngakak embedded photo",
  async execute(message) {
    const ngakak_img = await getNekoImage("laugh");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:laughing: **${message.author.username}** ngakak betul`)
      .setImage(ngakak_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
