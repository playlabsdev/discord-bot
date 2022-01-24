const { Collection } = require("discord.js");
const fs = require("fs");

const autoMessage = new Collection();

const commandFiles = fs
  .readdirSync("./automessages")
  .filter((file) => file.endsWith(".js"));

for (const commandFile of commandFiles) {
  const command = require(`../automessages/${commandFile}`);
  autoMessage.set(command.name, command);
}

module.exports = autoMessage;
