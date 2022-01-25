const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Sending a help embedded photo",
  execute(message) {
    let helper = new MessageEmbed()
      .setColor("#ff00dd")
      .setAuthor({
        name: "Command List",
      })
      .setDescription("Gak ada fitur apa-apa, cuma gabut aja.")
      .addFields(
        { name: "**Bapacc**", value: "`koro bapacc`", inline: true },
        { name: "**Bingung**", value: "`koro bingung`", inline: true },
        { name: "**Bosen**", value: "`koro bosen`", inline: true },
        { name: "**Garing**", value: "`koro garing`", inline: true },
        { name: "**Gelud**", value: "`koro gelud`", inline: true },
        { name: "**Genit**", value: "`koro genit`", inline: true },
        { name: "**Help**", value: "`koro help`", inline: true },
        { name: "**Lightstick**", value: "`koro ls`", inline: true },
        { name: "**Malu**", value: "`koro malu`", inline: true },
        { name: "**Mantap**", value: "`koro mantap`", inline: true },
        { name: "**Mutung**", value: "`koro mutung`", inline: true },
        { name: "**Nangis**", value: "`koro nangis`", inline: true },
        { name: "**Ngakak**", value: "`koro ngakak`", inline: true },
        { name: "**Ntah**", value: "`koro ntah`", inline: true },
        { name: "**Nyengir**", value: "`koro nyengir`", inline: true },
        { name: "**Istigfar**", value: "`koro stgf`", inline: true },
        { name: "**Tidur**", value: "`koro tidur`", inline: true },

        { name: "**Bonk**", value: "`koro bonk <mention>`", inline: true },
        {
          name: "**Bunuh**",
          value: "`koro bunuh <mention>`",
          inline: true,
        },
        { name: "**Elus**", value: "`koro elus <mention>`", inline: true },
        {
          name: "**Gigit**",
          value: "`koro gigit <mention>`",
          inline: true,
        },
        {
          name: "**Hai**",
          value: "`koro hai <mention>`",
          inline: true,
        },
        {
          name: "**Jilat**",
          value: "`koro jilat <mention>`",
          inline: true,
        },
        {
          name: "**Mandi**",
          value: "`koro mandi <mention>`",
          inline: true,
        },
        {
          name: "**Peluk**",
          value: "`koro peluk <mention>`",
          inline: true,
        },
        { name: "**Suap**", value: "`koro suap <mention>`", inline: true },
        {
          name: "**Tampar**",
          value: "`koro tampar <mention>`",
          inline: true,
        },
        {
          name: "**Tendang**",
          value: "`koro tendang <mention>`",
          inline: true,
        },
        { name: "**Tos**", value: "`koro tos <mention>`", inline: true }
      )
      .setFooter({
        text: "Made by koro",
      });
    message.channel.send({ embeds: [helper] });
  },
};
