const Discord = require('discord.js-selfbot-v13');

module.exports = {

    name: "antijoin",

    description: "Kick les gens qui rejoignent le serveur",

    // utilisation : &antijoin <on/off>

    run: async (client, message, args) => {

        if (!message.member.permissions.has('ADMINISTRATOR')) return message.edit("Vous n'avez pas la permission d'utiliser cette commande.");

        

        // Vérifier si l'argument est fourni

        if (!args[0]) return message.edit("Veuillez fournir l'état de l'anti-join (on/off).");

        const state = args[0].toLowerCase();

        if (state !== 'on' && state !== 'off') return message.edit("Veuillez spécifier l'état de l'anti-join comme 'on' ou 'off'.");

        // Vérifier si l'anti-join est activé

        if (state === 'on') {

            client.on('guildMemberAdd', async (member) => {

                // Kicker le membre qui a rejoint

                member.kick("Anti-join");

            });

        }

        message.edit(`L'anti-join a été mis sur : ${state === 'on' ? 'on' : 'off'}.`);

    }

};

 
