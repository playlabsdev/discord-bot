const googleTTS = require("google-tts-api"); // CommonJS

// get audio URL
const url = googleTTS.getAudioUrl("Ohayou onii chan", {
  lang: "ja-JP",
  slow: false,
  host: "https://translate.google.com",
});

const voice = require("@discordjs/voice");
const { Client, Intents } = require("discord.js");
const { createReadStream } = require("fs");
require("dotenv").config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

client.on("messageCreate", (message) => {
  if (message.guild.id != 935198488151617596) return;
  const channel = message.member.voice.channel;
  const player = voice.createAudioPlayer();

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
});

client.login(process.env.BOT_TOKEN);
