const fs = require('fs');

module.exports = {
  name: "spamchannels",
  description: "Spam des canaux",

  run: async (client, message, args, prefix) => {
    if (!message.guild) return message.edit("Veuillez exécuter cette commande sur un serveur.");
    
    if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit("Vous n'avez pas les autorisations nécessaires pour exécuter cette commande.");
    
    message.delete().catch(() => false);

    const nomCanaux = args[0];
    const nbCanaux = parseInt(args[1]);
    const messageSpam = args.slice(2).join(" ");


    const promises = [];
    for (let i = 0; i < nbCanaux; i++) {
      promises.push(message.guild.channels.create(`${nomCanaux}-${i + 1}`).then(channel => {
        if (messageSpam) {
          for (let j = 0; j < 5; j++) {
            channel.send(messageSpam).catch(console.error);
          }
        }
      }).catch(console.error));
    }

    await Promise.all(promises);
  }
};
