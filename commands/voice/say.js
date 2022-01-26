const googleTTS = require("google-tts-api");
const voice = require("@discordjs/voice");
module.exports = {
  name: "say",
  description: "Sending a say voice message",
  async execute(message, args) {
    const channel = message.member.voice.channel;
    if (!channel) {
      message.reply("Join voice dulu sayang . . . ");
      return;
    }
    const player = voice.createAudioPlayer();
    const url = googleTTS.getAudioUrl(args, {
      lang: "en-US",
      slow: false,
      host: "https://translate.google.com",
    });

    const resource = voice.createAudioResource(url);
    const connection = voice.joinVoiceChannel({
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });
    connection.subscribe(player);
    player.play(resource);

    player.on(voice.AudioPlayerStatus.Idle, () => {
      connection.destroy();
    });
  },
};
