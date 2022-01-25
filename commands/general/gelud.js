const gelud = require("../../data/gelud.json").gelut;

module.exports = {
  name: "gelud",
  description: "Sending a gelud embedded photo",
  execute(message) {
    const geludMessage = gelud[Math.floor(Math.random() * gelud.length)];
    message.channel.send(geludMessage);
  },
};
