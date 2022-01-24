const { MessageEmbed } = require("discord.js");

const mandi = require("../../data/mandi.json").mandi;

module.exports = {
  name: "mandi",
  description: "Sending a mandi embedded photo",
  execute(message, mentioned) {
    const mandi_img = mandi[Math.floor(Math.random() * mandi.length)];
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(
        `:bathtub:  **${message.author.username}** mandiin **${mentioned.username}**`
      )
      .setImage(mandi_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
