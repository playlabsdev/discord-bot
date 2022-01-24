const status = require("../data/status.json").statuses;
const spam = require("../data/spam.json").spam;

module.exports = {
  name: "ready",
  execute(client) {
    console.log("P L A Y Bot is ONLINE");

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
