const googleTTS = require("google-tts-api");
const voice = require("@discordjs/voice");

const logat = require("../../data/slashcommand/logat.json").logat;

module.exports = {
  name: "hantu",
  description: "Koro bilang sesuatu ke channel tujuanmu.",
  options: [
    {
      name: "channel",
      description: "Channel yang mana?",
      type: 7,
      channelTypes: ["GUILD_VOICE"],
      required: true,
    },
    {
      name: "logat",
      description: "Mau logat apa?",
      type: 3,
      required: true,
      choices: logat,
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
    const channel = options.getChannel("channel");
    const logat = options.getString("logat");
    const kalimat = options.getString("kalimat");
    if (!interaction || !options || !channel || !logat || !kalimat) return;
    console.log(channel.type);
    if (channel.type != "GUILD_VOICE") {
      interaction.reply({
        content: "Pilih yang voice sayang . . . ",
        ephemeral: true,
      });
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
