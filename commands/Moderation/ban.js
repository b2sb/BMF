const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "ban",
  description: "Ban a user",
  run: async (client, message, args) => {
    if (!message.guild) 
      return message.edit("Vous devez utiliser cette commande dans un serveur");

    if (!message.member.permissions.has("BAN_MEMBERS")) 
      return message.edit("Vous n'avez pas la permission d'utiliser cette commande");

    const userToBan = message.mentions.members.first();

    if (!userToBan) 
      return message.edit("Veuillez mentionner un utilisateur à bannir");

    const reason = args.slice(1).join(" ");



    await userToBan.ban({ reason }).catch(() => false);
    message.edit(` L'utilisateur ${userToBan.user.tag} a été banni avec succès.`);
  },
};