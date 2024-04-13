module.exports = {
  name: "totalunban",
  description: "Révoquer l'interdiction d'un utilisateur sur tous les serveurs en commun avec le selfbot",
  run: async (client, message, args, db) => {
    try {
      if (!message.member.permissions.has("BAN_MEMBERS")) {
        return message.edit("Vous n'avez pas la permission d'utiliser cette commande.");
      }

      const userToUnban = await client.users.fetch(args[0]);

      if (!userToUnban) {
        return message.edit("Veuillez fournir l'ID de l'utilisateur à débannir.");
      }

      client.guilds.cache.each(async guild => {
        if (!guild.me.permissions.has("BAN_MEMBERS")) {
          return;
        }

        const bans = await guild.bans.fetch();
        
        if (bans.has(userToUnban.id)) {
          await guild.members.unban(userToUnban.id, "Commande de débannissement total exécutée par un modérateur.");
        }
      });

      message.edit(`L'utilisateur avec l'ID ${args[0]} a été débanni de tous les serveurs.`);
    } catch (error) {
      console.error("Erreur lors du débannissement de l'utilisateur :", error);
      message.edit("Une erreur s'est produite lors du débannissement de l'utilisateur.");
    }
  }
};
