const { Collection } = require("discord.js");
const fs = require("fs");

const generalCommands = new Collection();

const commandFiles = fs
  .readdirSync("./commands/general")
  .filter((file) => file.endsWith(".js"));

for (const commandFile of commandFiles) {
  const command = require(`../commands/general/${commandFile}`);
  generalCommands.set(command.name, command);
}

module.exports = generalCommands;
