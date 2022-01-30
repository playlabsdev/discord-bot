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
            .get(Routes.applicationGuildCommands(clientId, guildId))
            .then((data) => {
              console.log("[Deleting] slash commands in DEVELOPMENT");
              for (const command of data) {
                const deleteUrl = `${Routes.applicationGuildCommands(
                  clientId,
                  guildId
                )}/${command.id}`;
                console.log(`Deleting ${command.name} command`);
                rest.delete(deleteUrl);
              }
            });
          await rest
            .put(Routes.applicationCommands(clientId), {
              body: slashCommand,
            })
            .then(() => {
              console.log("[Adding] slash commands in PRODUCTION success");
              slashCommand.map((command) =>
                console.log(`Command : [${command.name}] => added`)
              );
            });
        } else {
          await rest
            .put(Routes.applicationGuildCommands(clientId, guildId), {
              body: slashCommand,
            })
            .then(() => {
              console.log("[Adding] slash commands in DEVELOPMENT success");
              slashCommand.map((command) =>
                console.log(`Command : [${command.name}] => added`)
              );
            });
        }
      } catch (error) {
        console.log(error);
      }
    })();

    rest
      .get(Routes.applicationGuildCommands(clientId, guildId))
      .then((data) => {
        console.log(`[Checking] slash command in Guild ${guildId}`);
        data.map((command) =>
          console.log(`Command : [${command.name}] => detected`)
        );
      });
    rest.get(Routes.applicationCommands(clientId, guildId)).then((data) => {
      console.log("[Checking] slash command in Global");
      data.map((command) =>
        console.log(`Command : [${command.name}] => detected`)
      );
    });

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
