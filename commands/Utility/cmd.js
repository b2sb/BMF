const { Client, Intents, MessageActionRow, MessageButton } = require("discord.js-selfbot-v13");

module.exports = {
    name: "cmd",
    description: "Créer un cmd en DM",
    run: async (client, message, args, db, prefix) => {
        const user = message.author;

        message.edit(`Création du cmd. Assurez-vous d'avoir désactivé l'antigroup : [${prefix}antigroup off]`);

        client.channels.createGroupDM([user]).then((grp) => {
            if (!grp) return;

            grp.setIcon("https://cdn.discordapp.com/attachments/1211178515983237190/1212690542174146621/IMG_2186.jpg?ex=65f2c113&is=65e04c13&hm=933ec7c9e25446440ef5c8f690536ba727d8c4f9cdbec171050008a3b6b69c39&");
            grp.setName("cmd BMF");

                grp.send(`Bienvenue sur le cmd **BMF** \n\n ▸  ***Prefix BMF*** : __${prefix}__`).then((message) => message.pin())
            }, );
    }
}
