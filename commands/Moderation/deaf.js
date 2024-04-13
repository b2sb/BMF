module.exports = {
    name: "deaf",
    description: "Permet de rendre un utilisateur sourd dans le salon vocal actuel",
    run: async (client, message, args, db) => {
        try {

            const targetUser = message.mentions.members.first();
            if (!targetUser) {
                return message.edit("Veuillez mentionner un utilisateur à rendre sourd.");
            }

            if (!message.member.permissions.has("")) {
                return message.edit("Je n'ai pas la permission de rendre les membres sourds dans ce salon.");
            }

            await targetUser.voice.setDeaf(true);
            message.edit(`L'utilisateur ${targetUser} a été mis en sourdine avec succès.`);

        } catch (error) {
            console.error("Une erreur est survenue lors de l'exécution de la commande deaf:", error);
            message.edit("Une erreur est survenue lors de l'exécution de la commande. Veuillez réessayer plus tard.");
        }
    }
};
