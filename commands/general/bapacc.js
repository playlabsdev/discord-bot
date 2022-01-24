const { MessageEmbed } = require("discord.js");

const bapacc = require("../../data/bapacc.json").bapacc;

module.exports = {
  name: "bapacc",
  description: "Sending a bapacc embedded photo",
  execute(message) {
    const bapacc_img = bapacc[Math.floor(Math.random() * bapacc.length)];
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:man: sini sama om`)
      .setImage(bapacc_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
