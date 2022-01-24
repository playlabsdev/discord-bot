const { MessageEmbed } = require("discord.js");

const { getNekoImage } = require("../../utils/fetchImage");

module.exports = {
  name: "suap",
  description: "Sending a suap embedded photo",
  async execute(message, mentioned) {
    const suap_img = await getNekoImage("feed");
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:pie: **${message.author.username}** nyuapin **${mentioned.username}**`
      )
      .setImage(suap_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
