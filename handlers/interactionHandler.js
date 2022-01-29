const { Collection } = require("discord.js");
const fs = require("fs");

const slashCommands = new Collection();

const commandFiles = fs
  .readdirSync("./commands/slash")
  .filter((file) => file.endsWith(".js"));

for (const commandFile of commandFiles) {
  const command = require(`../commands/slash/${commandFile}`);
  slashCommands.set(command.name, command);
}

module.exports = slashCommands;
