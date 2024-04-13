module.exports = {
    name: "unmuteall",
    description: "Permet de rétablir l'audition de tous les membres d'un salon vocal",
    run: async (client, message, args, db) => {
        try {
            if (!message.member.voice.channel) {
                return message.edit("Vous devez être dans un salon vocal pour utiliser cette commande.");
            }

            if (!message.member.voice.channel.permissionsFor(message.guild.me).has("MUTE_MEMBERS")) {
                return message.edit("Je n'ai pas la permission de rendre les membres muets dans ce salon.");
            }

            const members = message.member.voice.channel.members;
            members.forEach(member => {
                member.voice.setMute(false)
                    .catch(console.error);
            });

            message.edit("tous les membres on été demute avec succès dans le salon vocal actuel.");

        } catch (error) {
            console.error("Une erreur est survenue lors de l'exécution de la commande unmuteall:", error);
            message.edit("Une erreur est survenue lors de l'exécution de la commande. Veuillez réessayer plus tard.");
        }
    }
};