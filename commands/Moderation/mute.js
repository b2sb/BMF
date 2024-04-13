module.exports = {
    name: "mute",
    description: "Permet de rendre muet un utilisateur dans le salon vocal actuel",
    run: async (client, message, args, db) => {
        try {

            const targetUser = message.mentions.members.first();
            if (!targetUser) {
                return message.edit("Veuillez mentionner un utilisateur à rendre muet.");
            }

            if (!message.member.voice.channel.permissionsFor(message.guild.me).has("MUTE_MEMBERS")) {
                return message.edit("Je n'ai pas la permission de rendre les membres muets dans ce salon.");
            }

            await targetUser.voice.setMute(true);
            message.edit(`L'utilisateur ${targetUser} a été rendu muet avec succès dans le salon vocal actuel.`);

        } catch (error) {
            console.error("Une erreur est survenue lors de l'exécution de la commande mute:", error);
            message.edit("Une erreur est survenue lors de l'exécution de la commande. Veuillez réessayer plus tard.");
        }
    }
};
