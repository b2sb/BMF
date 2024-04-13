const Discord = require("discord.js-selfbot-v13");

 module.exports = {
  name: "kickall",
  description: "kick all a server",
  run: async (client, message, args) => {
    if (!message.guild) return message.edit("Vous devez utiliser cette commande dans un serveur")
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.edit("Vous n'avez pas la permissions pour utiliser cette commande")
    
    message.delete().catch(() => false)
    
    await message.guild.members.fetch()
    message.guild.members.cache.forEach(member => {
        member.kick().catch(() => false)
    });
  },
};