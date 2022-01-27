const voice = require("@discordjs/voice");

module.exports = {
  name: "temani",
  description: "Sending a temani voice message",
  async execute(message, time) {
    const channel = message.member.voice.channel;
    const author = message.author.toString();
    if (time !== "selamanya") {
      time = Number(time);
    } else {
      time = 3600;
    }

    if (!channel) {
      message.reply("Join voice dulu sayang . . . ");
      return;
    }
    if (!time) {
      message.reply("Mau berapa menit sayang . . . ");
      return;
    }

    const player = voice.createAudioPlayer();
    const connection = voice.joinVoiceChannel({
      selfDeaf: false,
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    if (time == 3600) {
      message.reply("aku bakal nemenin kamu selamanya ya sayang . . .");
    } else {
      message.reply(
        `aku bakal nemenin kamu selama ${time} menit ya sayang . . .`
      );
    }

    connection.subscribe(player);
    let resource = voice.createAudioResource("./data/sfx/nya.mp3");
    player.play(resource);

    player.on(voice.AudioPlayerStatus.Idle, () => {
      setTimeout(() => {
        message.channel.send(`aku pergi dulu ya ${author} sayang . . .`);
        connection.destroy();
      }, 60000 * time);
    });
  },
};
