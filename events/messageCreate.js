const generalCommand = require("../handlers/generalCommandHandler");
const withMentionCommand = require("../handlers/withMentionCommandHandler");
const autoMessageCommand = require("../handlers/autoMessageHandler");
const voiceMessageCommand = require("../handlers/voiceMessageHandler");

const prefix = process.env.PREFIX;

const detectloli = require("../data/loli.json").detector;
const detectcoklat = require("../data/coklat.json").detector;
const detectgreet = require("../data/greets.json").greets.detector;

module.exports = {
  name: "messageCreate",
  execute(message, client) {
    // if (message.guild.id !== "935198488151617596") return;
    if (message.author.bot || message.author.id == client.user.id) return;
    const content = message.content.toLowerCase();
    const filter = content.split(" ");
    const checkLoli = filter.filter((word) => detectloli.includes(word));
    const checkCoklat = filter.filter((word) => detectcoklat.includes(word));
    const checkGreet = filter.filter((word) => detectgreet.includes(word));

    setTimeout(() => {
      if (!content.startsWith(prefix) || message.author.bot) return;

      const args = content.substring(prefix.length).split(" ");
      const mentioned = message.mentions.users.first();

      if (!args) {
        message.reply("Ada yang hilang sayang");
        return;
      }

      if (!mentioned) {
        const commandArg =
          generalCommand.get(args[1]) || voiceMessageCommand.get(args[1]);
        if (!commandArg) {
          message.reply("Ada yang salah sayang");
          return;
        }
        commandArg.execute(
          message,
          message.content.substring(prefix.length + args[1].length + 2)
        );
      } else {
        const commandArg = withMentionCommand.get(args[1]);
        if (!commandArg) {
          message.reply("Ada yang kurang sayang");
          return;
        }
        if (message.author.id == mentioned.id) {
          message.reply(
            "Astagfirullah, kamu ada masalah apa? Sini cerita . . ."
          );
          return;
        }

        commandArg.execute(message, mentioned);
      }
    }, 1000);

    if (checkLoli.length) {
      setTimeout(() => {
        autoMessageCommand.get("loli").execute(message);
      }, 1500);
      message.channel.sendTyping();
      return;
    }

    if (checkCoklat.length) {
      setTimeout(() => {
        autoMessageCommand.get("coklat").execute(message);
      }, 1500);
      message.channel.sendTyping();
      return;
    }

    if (checkGreet.length) {
      setTimeout(() => {
        autoMessageCommand.get("greets").execute(message, checkGreet[0]);
      }, 1500);
      message.channel.sendTyping();
      return;
    }

    if (message.channelId == process.env.SPAM_CHANNELID) {
      if (message.mentions.has(client.user)) {
        setTimeout(() => {
          autoMessageCommand.get("gelud").execute(message);
        }, 1500);
        message.channel.sendTyping();
        return;
      }
    }
  },
};
