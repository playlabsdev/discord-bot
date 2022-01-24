const axios = require("axios");

const getNekoImage = async (categoty) => {
  let neko = await axios.get("https://nekos.best/api/v1/" + categoty);
  return neko.data.url;
};

const getWaifuImage = async (categoty) => {
  let waifu = await axios.get("https://api.waifu.pics/sfw/" + categoty);
  return waifu.data.url;
};

module.exports = { getNekoImage, getWaifuImage };
