module.exports = {
  name: "unbanall",
  description: "Débannir tous les utilisateurs du serveur",
  run: async (client, message, args, db) => {
    try {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.reply("Vous n'avez pas la permission de débannir des membres.");
      }

      const bannedUsers = await message.guild.fetchBans();

      bannedUsers.forEach(async (user) => {
        await message.guild.members.unban(user.user.id);
      });

      message.channel.send("Tous les utilisateurs bannis ont été débannis.");
    } catch (error) {
      console.error("Erreur lors du débannissement des utilisateurs:", error);
      message.channel.send("Une erreur est survenue lors du débannissement des utilisateurs.");
    }
  },
};
