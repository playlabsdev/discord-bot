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
    let sounds = [];
    const player = voice.createAudioPlayer();
    if (args.length > 200) {
      let voices = googleTTS.getAllAudioUrls(args, {
        lang: "en-US",
        slow: false,
        host: "https://translate.google.com",
      });
      for (let voice of voices) {
        sounds.push(voice.url);
      }
    } else {
      let voice = googleTTS.getAudioUrl(args, {
        lang: "en-US",
        slow: false,
        host: "https://translate.google.com",
      });
      sounds.push(voice);
    }

    const connection = voice.joinVoiceChannel({
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    connection.subscribe(player);
    let resource = voice.createAudioResource(sounds[0]);
    player.play(resource);

    player.on(voice.AudioPlayerStatus.Idle, () => {
      sounds.shift();
      if (sounds.length > 0) {
        resource = voice.createAudioResource(sounds[0]);
        player.play(resource);
      } else {
        connection.destroy();
      }
    });
  },
};
