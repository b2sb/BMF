const Discord = require("discord.js-selfbot-v13");
const { savedb, nitrocode } = require("../../index")
module.exports = {
  name: "nitro",
  description: "Generate a random nitro",
  run: async (client, message, args, db) => {
    try{
        message.edit(`https://discord.gift/${nitrocode(16, "0aA")}`)
        }
        catch(e){}
    }
}