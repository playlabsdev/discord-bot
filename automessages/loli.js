const { MessageEmbed } = require("discord.js");

const department = require("../data/fbi.json").department;

module.exports = {
  name: "loli",
  description: "Sending a loli auto message",
  execute(message) {
    let agent = department[Math.floor(Math.random() * department.length)];
    let fbi = new MessageEmbed()
      .setColor("#ff00dd")
      .setDescription(`:man_police_officer: **${agent.halo}**`)
      .setImage(agent.image);
    message.channel.send({ embeds: [fbi] });
  },
};
