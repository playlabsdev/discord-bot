const slashCommand = require("../handlers/interactionHandler");

module.exports = {
  name: "interactionCreate",
  execute(interaction, client) {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (!slashCommand.has(commandName)) return;
    slashCommand.get(commandName).execute(interaction, client);
  },
};
