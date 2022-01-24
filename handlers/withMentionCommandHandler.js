const { Collection } = require("discord.js");
const fs = require("fs");

const withMentionCommands = new Collection();

const commandFiles = fs
  .readdirSync("./commands/withmention")
  .filter((file) => file.endsWith(".js"));

for (const commandFile of commandFiles) {
  const command = require(`../commands/withmention/${commandFile}`);
  withMentionCommands.set(command.name, command);
}

module.exports = withMentionCommands;
