const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "kick",
  description: "Kick a user",
  run: async (client, message, args) => {

    if (!message.guild) 
      return message.edit("Vous devez utiliser cette commande dans un serveur");

    if (!message.member.permissions.has("KICK_MEMBERS")) 
      return message.edit("Vous n'avez pas la permission d'utiliser cette commande");

    const userToKick = message.mentions.members.first();

    if (!userToKick) 
      return message.edit("Veuillez mentionner un utilisateur à expulser");

    const reason = args.slice(1).join(" ");


    await userToKick.kick({ reason }).catch(() => false);
    message.edit(`L'utilisateur ${userToKick.user.tag} a été expulsé avec succès.`);
  },
};