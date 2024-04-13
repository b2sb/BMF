const Discord = require("discord.js-selfbot-v13");

module.exports = {

  name: "search",
// utilisation : &nsfw [type]
  description: "Envoyer une image pornographique",

  run: async (client, message, args) => {
 

    if (!message.channel.nsfw) return message.edit('Cette commande est disponible uniquement dans les salons nsfw !');
    if (!args[0]) return message.edit('Vous devez définir un type.');

    

    message.edit('chargement..').then(() => {

        const superagent = require('superagent');

// Initialize superagent in your bot setup

client.superagent = superagent;

      client.superagent.get('https://nekobot.xyz/api/image').query({

        type: args[0]

      }).end((err, response) => {

        if (err) {

          return message.edit("Aucun resultat :(");

        }

        message.edit(response.body.message);

      });

    });

  }

};