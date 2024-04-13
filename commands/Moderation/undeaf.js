module.exports = {
    name: "undeaf",
    description: "Permet de rétablir l'audition d'un utilisateur dans le salon vocal actuel",
    run: async (client, message, args, db) => {
        try {

            const targetUser = message.mentions.members.first();
            if (!targetUser) {
                return message.edit("Veuillez mentionner un utilisateur dont l'audition doit être rétablie.");
            }

            if (!message.member.voice.channel.permissionsFor(message.guild.me).has("DEAFEN_MEMBERS")) {
                return message.edit("Je n'ai pas la permission de mettre les membres en sourdine dans ce salon.");
            }

            await targetUser.voice.setDeaf(false);
            message.edit(`L'utilisateur ${targetUser} a retrouvé son audition avec succès.`);

        } catch (error) {
            console.error("Une erreur est survenue lors de l'exécution de la commande undeaf:", error);
            message.edit("Une erreur est survenue lors de l'exécution de la commande. Veuillez réessayer plus tard.");
        }
    }
};
