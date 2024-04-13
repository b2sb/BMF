const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "unban",
  description: "Unban a user",
  run: async (client, message, args) => {
    if (!message.guild) 
      return message.edit("Vous devez utiliser cette commande dans un serveur");

    if (!message.member.permissions.has("BAN_MEMBERS")) 
      return message.edit("Vous n'avez pas la permission d'utiliser cette commande");

    const userID = args[0];

    if (!userID) 
      return message.edit("Veuillez fournir l'ID d'un utilisateur à débannir");

    const reason = args.slice(1).join(" ");
    const bans = await message.guild.bans.fetch();
    const bannedUser = bans.get(userID);

    if (!bannedUser) 
      return message.edit("Cet utilisateur n'est pas actuellement banni");

    await message.guild.members.unban(userID, reason).catch(() => false);
    message.edit(`L'utilisateur avec l'ID ${userID} a été débanni avec succès.`);
  },
};