module.exports = {
    name: "undeafall",
    description: "Permet de rétablir l'audition de tous les membres dans une vocal",
    run: async (client, message, args, db) => {
        try {
            if (!message.member.voice.channel) {
                return message.edit("Vous devez être dans un salon vocal pour utiliser cette commande.");
            }

            if (!message.member.voice.channel.permissionsFor(message.guild.me).has("DEAFEN_MEMBERS")) {
                return message.edit("Je n'ai pas la permission de mettre des membres en sourdine dans ce salon.");
            }

            const members = message.member.voice.channel.members;
            members.forEach(member => {
                member.voice.setDeaf(false)
                    .catch(console.error);
            });

            message.edit("L'audition de tous les membres a été rétablie avec succès dans ce salon vocal.");

        } catch (error) {
            console.error("Une erreur est survenue lors de l'exécution de la commande undeafall:", error);
            message.edit("Une erreur est survenue lors de l'exécution de la commande. Veuillez réessayer plus tard.");
        }
    }
};
