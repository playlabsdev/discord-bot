const { Client, Collection, Intents } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const fileEvents = require("./handlers/eventHandler");

for (const fileEvent of fileEvents) {
  const event = require(`./events/${fileEvent}`);
  if (event.once) {
    client.once(event.name, (args) => event.execute(args, client));
  } else {
    client.on(event.name, (args) => event.execute(args, client));
  }
}

client.login(process.env.BOT_TOKEN);
