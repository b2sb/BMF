const Discord = require("discord.js-selfbot-v13");
module.exports = {
  name: "thot",
  description: "Note the percentage of other people's filth",
  run: async (client, message, args, db) => {
    try{
        const user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        var purcentage = Math.floor(Math.random() * 100) + 1
        message.edit(`Le pourcentage de saloperie de ${user} : \`${purcentage}%\``)
        }
        catch(e){}
    }
}