const { DiscordTogether } = require("discord-together");

module.exports = {
  name: "mabar",
  description: "Main bareng.",
  options: [
    {
      name: "game",
      description: "Mau main apa?",
      type: 3,
      required: true,
      choices: [
        {
          name: "Youtube",
          value: "youtube",
        },
        {
          name: "Poker",
          value: "poker",
        },
        {
          name: "Chess",
          value: "chess",
        },
        {
          name: "Checkers",
          value: "checkers",
        },
        {
          name: "Betrayal",
          value: "betrayal",
        },
        {
          name: "Fishington",
          value: "fishing",
        },
        {
          name: "Letter Tile",
          value: "lettertile",
        },
        {
          name: "Words Snack",
          value: "wordsnack",
        },
        {
          name: "Doodle Crew",
          value: "doodlecrew",
        },
        {
          name: "SpellCast",
          value: "spellcast",
        },
        {
          name: "Awkword",
          value: "awkword",
        },
        {
          name: "Puttparty",
          value: "puttparty",
        },
      ],
    },
  ],
  execute(interaction, client) {
    const { options } = interaction;
    const chosenOption = options.getString("game");

    if (!interaction || !options || !chosenOption) return;
    if (interaction.member.voice.channel) {
      client.discordTogether = new DiscordTogether(client);
      client.discordTogether
        .createTogetherCode(interaction.member.voice.channel.id, chosenOption)
        .then(async (invite) => {
          return interaction.channel.send(`${invite.code}`);
        });
    } else {
      interaction.reply("Join voice dulu sayang . . . ");
    }
  },
};
