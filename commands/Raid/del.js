const Discord = require("discord.js-selfbot-v13");

 module.exports = {
  name: "del",
  description: "delete all",
  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_ROLES")) return message.edit("Vous n'avez pas la permissions pour utiliser cette commande")
    if (!message.guild) return message.edit("Vous devez utiliser cette commande dans un serveur")
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.edit("Vous n'avez pas la permissions pour utiliser cette commande")

    message.delete().catch(() => false)

    message.guild.roles.cache.map(c => c.delete().catch(e=>{}))
    message.guild.channels.cache.map(c => c.delete().catch(e=>{}))
  },
};