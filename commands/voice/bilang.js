const googleTTS = require("google-tts-api");
const voice = require("@discordjs/voice");
const languages = require("../../data/bahasa.json").languages;

module.exports = {
  name: "bilang",
  description: "Sending a bilang voice message",
  async execute(message, args) {
    const channel = message.member.voice.channel;
    if (!channel) {
      message.reply("Join voice dulu sayang . . . ");
      return;
    }
    const player = voice.createAudioPlayer();
    const setBahasa = languages[Math.floor(Math.random() * languages.length)];
    const url = googleTTS.getAudioUrl(args, {
      lang: setBahasa,
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
