module.exports = {
    name: "deafall",
    description: "Permet de mettre en sourdine toutes les personnes dans une vocal",
    run: async (client, message, args, db) => {
        try {
            if (!message.member.voice.channel) {
                return message.edit("Vous devez être dans un salon vocal pour utiliser cette commande.");
            }

            if (!message.member.voice.channel.permissionsFor(message.guild.me).has("DEAFEN_MEMBERS")) {
                return message.edit("Je n'ai pas la permission de rendre les membres sourds dans ce salon.");
            }

            const members = message.member.voice.channel.members;
            members.forEach(member => {
                member.voice.setDeaf(true)
                    .catch(console.error);
            });

            message.edit("Tous les membres ont été rendus sourds avec succès dans ce salon vocal.");

        } catch (error) {
            console.error("Une erreur est survenue lors de l'exécution de la commande deafall:", error);
            message.edit("Une erreur est survenue lors de l'exécution de la commande. Veuillez réessayer plus tard.");
        }
    }
};
