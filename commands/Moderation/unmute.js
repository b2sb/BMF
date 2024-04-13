module.exports = {
    name: "unmute",
    description: "Permet de rétablir le son d'un utilisateur dans le salon vocal actuel",
    run: async (client, message, args, db) => {
        try {

            const targetUser = message.mentions.members.first();
            if (!targetUser) {
                return message.edit("Veuillez mentionner un utilisateur dont le son doit être rétabli.");
            }


            if (!message.member.voice.channel.permissionsFor(message.guild.me).has("MUTE_MEMBERS")) {
                return message.edit("Je n'ai pas la permission de rendre les membres muets dans ce salon.");
            }

            await targetUser.voice.setMute(false);
            message.edit(`L'utilisateur ${targetUser} a retrouvé le son avec succès dans le salon vocal actuel.`);

        } catch (error) {
            console.error("Une erreur est survenue lors de l'exécution de la commande unmute:", error);
            message.edit("Une erreur est survenue lors de l'exécution de la commande. Veuillez réessayer plus tard.");
        }
    }
};
