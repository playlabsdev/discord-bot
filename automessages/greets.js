const greets = require("../data/greets.json").greets;

module.exports = {
  name: "greets",
  description: "Sending a greets auto message",
  execute(message, greet) {
    let replyGreet =
      greets[greet][Math.floor(Math.random() * greets[greet].length)];
    message.reply(replyGreet);
  },
};
