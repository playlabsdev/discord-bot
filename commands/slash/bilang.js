const googleTTS = require("google-tts-api");
const voice = require("@discordjs/voice");

module.exports = {
  name: "bilang",
  description: "Koro bilang sesuatu ke kamu.",
  options: [
    {
      name: "logat",
      description: "Mau logat apa?",
      type: 3,
      required: true,
      choices: [
        {
          name: "Indonesia",
          value: "youtube",
        },
        {
          name: "Jawa",
          value: "jv-ID",
        },
        {
          name: "Sunda",
          value: "su-ID",
        },
        {
          name: "English (US)",
          value: "en-US",
        },
        {
          name: "Japanese",
          value: "ja-JP",
        },
      ],
    },
    {
      name: "kalimat",
      description: "Mau bilang apa?",
      type: 3,
      required: true,
    },
  ],
  async execute(interaction, client) {
    const { options } = interaction;
    const logat = options.getString("logat");
    const kalimat = options.getString("kalimat");
    if (!interaction || !options || !logat || !kalimat) return;
    const channel = interaction.member.voice.channel;
    if (!channel) {
      interaction.reply("Join voice dulu sayang . . . ");
      return;
    }
    let sounds = [];
    const player = voice.createAudioPlayer();
    if (kalimat.length > 200) {
      let voices = googleTTS.getAllAudioUrls(kalimat, {
        lang: logat,
        slow: false,
        host: "https://translate.google.com",
      });
      for (let voice of voices) {
        sounds.push(voice.url);
      }
    } else {
      let voice = googleTTS.getAudioUrl(kalimat, {
        lang: logat,
        slow: false,
        host: "https://translate.google.com",
      });
      sounds.push(voice);
    }

    const connection = voice.joinVoiceChannel({
      channelId: channel.id,
      guildId: interaction.guild.id,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });

    connection.subscribe(player);
    let resource = voice.createAudioResource(sounds[0]);
    player.play(resource);

    await interaction.reply({ content: "Aku ngomong tuh!", ephemeral: true });

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
