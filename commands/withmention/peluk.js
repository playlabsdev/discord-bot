const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "peluk",
  description: "Sending a peluk embedded photo",
  async execute(message, mentioned) {
    const peluk_img = await getNekoImage("hug");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:people_hugging: **${message.author.username}** meluk **${mentioned.username}**`
      )
      .setImage(peluk_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
