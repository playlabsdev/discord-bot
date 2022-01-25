const googleTTS = require("google-tts-api");

module.exports = {
  name: "bilang",
  description: "Sending a bilang voice message",
  async execute(message) {
    console.log(message.content);
    const channel = message.member.voice.channel;
    const player = voice.createAudioPlayer();

    const url = googleTTS.getAudioUrl(args, {
      lang: "ja-JP",
      slow: false,
      host: "https://translate.google.com",
    });

    const resource = voice.createAudioResource(url);
    console.log(url);
    const connection = voice.joinVoiceChannel({
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    player.play(resource);
    connection.subscribe(player);

    player.on(voice.AudioPlayerStatus.Idle, () => {
      connection.destroy();
    });
  },
};
