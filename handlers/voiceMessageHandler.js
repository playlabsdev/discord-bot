const { Collection } = require("discord.js");
const fs = require("fs");

const voiceCommands = new Collection();

const commandFiles = fs
  .readdirSync("./commands/voice")
  .filter((file) => file.endsWith(".js"));

for (const commandFile of commandFiles) {
  const command = require(`../commands/voice/${commandFile}`);
  voiceCommands.set(command.name, command);
}

module.exports = voiceCommands;
