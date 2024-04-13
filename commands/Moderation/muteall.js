module.exports = {
    name: "muteall",
    description: "Permet de rendre muets tous les membres dans le salon vocal actuel",
    run: async (client, message, args, db) => {
        try {
            if (!message.member.voice.channel) {
                return message.reply("Vous devez être dans un salon vocal pour utiliser cette commande.");
            }

            if (!message.member.voice.channel.permissionsFor(message.guild.me).has("MUTE_MEMBERS")) {
                return message.reply("Je n'ai pas la permission de rendre les membres muets dans ce salon.");
            }

            const members = message.member.voice.channel.members;
            members.forEach(member => {
                member.voice.setMute(true)
                    .catch(console.error);
            });

            message.channel.send("Tous les membres ont été rendus muets avec succès dans le salon vocal actuel.");

        } catch (error) {
            console.error("Une erreur est survenue lors de l'exécution de la commande muteall:", error);
            message.reply("Une erreur est survenue lors de l'exécution de la commande. Veuillez réessayer plus tard.");
        }
    }
};
