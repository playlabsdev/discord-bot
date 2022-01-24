const fs = require("fs");

const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

module.exports = eventFiles;
