const Discord = require("discord.js-selfbot-v13");

module.exports = {

  name: "hentai",

  description: "Envoyer une image pornographique en 4k",

  run: async (client, message, args) => {

    if (!message.channel.nsfw) return message.edit('Cette commande est disponible uniquement dans les salons nsfw !');

    

    message.edit('chargement..').then(() => {

        const superagent = require('superagent');

// Initialize superagent in your bot setup

client.superagent = superagent;

      client.superagent.get('https://nekobot.xyz/api/image').query({

        type: 'hentai'

      }).end((err, response) => {

        if (err) {

          return message.edit("Erreur lors de la récupération de l'image");

        }

        message.edit(response.body.message);

      });

    });

  }

};