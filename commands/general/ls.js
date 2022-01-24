const { MessageEmbed } = require("discord.js");

const ls = require("../../data/lightstick.json").lightstick;

module.exports = {
  name: "ls",
  description: "Sending a lightstick embedded photo",
  execute(message) {
    const lightstick_img = ls[Math.floor(Math.random() * ls.length)];
    let embedMessage = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:partying_face: **KYYAAAAHHHH WANGY WANGY WANGY**`)
      .setImage(lightstick_img);
    message.channel.send({ embeds: [embedMessage] });
  },
};
