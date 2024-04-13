module.exports = {
  name: "unnickname",
  description: "Supprime les surnoms de tous les membres d'un serveur",

  run: async (client, message, args) => {
    const abonnement = require('../../configuration/abonnement.json')
    const premium = abonnement.premium;

    if (!premium.includes(client.user.id)) {
        return message.edit("***Tu n'a pas la permission: \`Premium 💎\` !***");
    }

    if (!message.guild) return message.edit(
      `Veuillez exécuter cette commande dans un serveur`
    );
    
    const guildOwner = message.guild.ownerID;
    if (message.author.id !== guildOwner && !message.member.permissions.has("ADMINISTRATOR")) return message.edit(
      `Vous n'avez pas la permission de modifier les surnoms`
    );
    
    if (!message.guild.members.me.permissions.has("MANAGE_NICKNAMES")) return message.edit(
      `Vous n'avez pas les permissions nécessaires pour exécuter cette commande`
    );

    message.delete().catch(() => false);
    await message.guild.members.fetch();
    message.guild.members.cache.forEach(m => m.setNickname(null).catch(() => false));
    message.edit("Les surnoms ont été supprimés avec succès pour tous les membres du serveur.");
  }
};
