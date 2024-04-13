module.exports = {
  name: "bl",
  description: "Bannir un utilisateur de tous les serveurs en commun avec le selfbot",
  run: async (client, message, args, db) => {
    try {
         if (!message.member.permissions.has("BAN_MEMBERS")) 
      return message.edit("Vous n'avez pas la permission d'utiliser cette commande");

      const userToBan = message.mentions.users.first();

      if (!userToBan) {
        return message.edit("Veuillez mentionner l'utilisateur à bannir.");
      }

      client.guilds.cache.each(async guild => {
        if (!guild.me.permissions.has("BAN_MEMBERS")) {
          return;
        }

        const member = await guild.members.fetch(userToBan.id);
        
        if (member) {
          await member.ban({ reason: "Commande de bannissement bl exécutée par un modérateur." });
        }
      });

      message.edit(`L'utilisateur ${userToBan.tag} a été banni de tous les serveurs.`);
    } catch (error) {
      console.error("Erreur lors du bannissement de l'utilisateur :", error);
      message.edit("Une erreur s'est produite lors du bannissement de l'utilisateur.");
    }
  }
};
