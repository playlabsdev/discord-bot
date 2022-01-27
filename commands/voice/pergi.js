const voice = require("@discordjs/voice");

module.exports = {
  name: "pergi",
  description: "Sending a pergi voice message",
  async execute(message) {
    const guild = message.guild.id;
    const channel = message.member.voice.channel;
    const connection = voice.getVoiceConnection(guild, "default");

    if (
      !channel ||
      !connection ||
      connection.joinConfig.channelId != channel.id
    ) {
      message.reply("Join voice dulu sayang . . . ");
      return;
    }

    message.reply("Gitu ya? kamu jahat banget!");
    connection.destroy();
  },
};
