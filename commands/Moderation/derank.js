module.exports = {
  name: "derank",
  description: "Rétrograder un utilisateur en retirant tous les rôles",
  run: async (client, message, args, db) => {
    try {
         if (!message.member.permissions.has("MANAGE_ROLES")) 
      return message.edit("Vous n'avez pas la permission d'utiliser cette commande");

      const targetUser = message.mentions.members.first();
      if (!targetUser) {
        return message.edit("Veuillez mentionner un utilisateur à derank.");
      }

      await targetUser.roles.set([]);

      message.edit(`${targetUser} à été dérank !`);
    } catch (error) {
      console.error("Erreur dans la commande derank :", error);
      message.edit("Une erreur s'est produite lors de la tentative de rétrogradation de l'utilisateur.");
    }
  }
};
