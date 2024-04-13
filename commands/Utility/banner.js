const Discord = require("discord.js-selfbot-v13");

module.exports = {
    name: "banner",
    description: "Get a user's banner",
    run: async (client, message, args) => {
        let user;
        if (args.length > 0) {
            const mention = args[0];
            const userID = mention.replace(/[^0-9]/g, '');

            user = client.users.cache.get(userID);

            if (!user) {
                return message.edit(`▸ __**${db.footer}**__ ✫ \n> Utilisateur introuvable. Veuillez spécifier un utilisateur valide.`);
            }

        } else {
            user = message.author;
        }

        await user.fetch();

        if (!user.banner) {
            return message.edit(`▸ __**${db.footer}**__ ✫ ⛧\n> L'utilisateur ${user} ne possède pas de bannière.`);
        }

        const bannerURL = user.bannerURL({ dynamic: true, format: 'png', size: 1024 });

        message.edit(`▸ __**${db.footer}**__ ✫\n> **Bannière de ${user} :** ${bannerURL}`);
    }
}