const spam = require("../data/gelud.json").gelud;

module.exports = {
  name: "gelud",
  description: "Sending a gelud auto message",
  execute(message) {
    message.channel.sendTyping();
    let gelud = spam[Math.floor(Math.random() * spam.length)];
    message.reply(gelud);
  },
};
