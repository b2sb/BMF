module.exports = {
    name: "coinflip",
    description: "Jouer Pile ou Face",
    run: async (client, message, args, db) => {
        try {
            const result = Math.random() < 0.5 ? 'Pile' : 'Face';
            message.edit(`La pièce a atterri sur: ${result}`);
        } catch{e}
        }
    }