const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config();
const slashCommand = require("../handlers/interactionHandler");
const status = require("../data/status.json").statuses;
const spam = require("../data/spam.json").spam;

const rest = new REST({ version: 9 }).setToken(process.env.BOT_TOKEN);

module.exports = {
  name: "ready",
  execute(client) {
    console.log("P L A Y Bot is ONLINE");

    const clientId = client.user.id;
    const guildId = client.guilds.cache.find(
      (guild) => guild.name == "Nia's server"
    ).id;
    (async () => {
      try {
        if (process.env.ENV === "production") {
          await rest
            .put(Routes.applicationCommands(clientId), {
              body: slashCommand,
            })
            .then(() =>
              console.log("Building slash commands in PRODUCTION success")
            );
        } else {
          await rest
            .put(Routes.applicationGuildCommands(clientId, guildId), {
              body: slashCommand,
            })
            .then(() => {
              console.log("Building slash commands in DEVELOPMENT success");
            });
        }
      } catch (error) {
        console.log(error);
      }
    })();

    // console.log(
    //   rest
    //     .get(Routes.applicationGuildCommands(clientId, guildId))
    //     .then((data) => console.log(data))
    // );
    // console.log(
    //   rest
    //     .get(Routes.applicationCommands(clientId, guildId))
    //     .then((data) => console.log(data))
    // );

    let spamming = client.channels.cache.get(process.env.SPAM_CHANNELID);
    setInterval(() => {
      let currentStatus = status[Math.floor(Math.random() * status.length)];
      client.user.setActivity(currentStatus.name, { type: currentStatus.type });
    }, 5000);
    setInterval(() => {
      let spamChat = spam[Math.floor(Math.random() * spam.length)];
      spamming.send(spamChat);
    }, 1800000);
  },
};
