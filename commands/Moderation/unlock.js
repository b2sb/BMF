module.exports = {
  name: "unlock",
  description: "Verrouiller un salon",
  run: async (client, message, args, db) => {
    try {
if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.edit("Vous n'avez pas la permissions pour utiliser cette commande")

      const channel = message.mentions.channels.first() || message.channel;

      await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SEND_MESSAGES: true
      });

      message.edit(`Le salon: ${channel} a été déverrouillé.`);
    } catch (error) {
      console.error("Erreur lors du verrouillage du salon:", error);
      message.edit("Une erreur s'est produite lors du verrouillage du salon.");
    }
  }
};
