const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "fun",
  description: "Menu fun",
  run: async (client, message, db, args, prefix) => {
    try{

        message.edit(`
        ▸ __**${db.footer}**__ ✫
        
\`${prefix}say <@user> [message]\` ➟ ***Dire une chose sous l'identité d'autrui (webhook)**.*
\`${prefix}thot <@user>\` ➟ ***Connaitre le pourcentage de saloperie de quelqu'un**.*
\`${prefix}love <@user>\` ➟ ***Message animé**.*
\`${prefix}nitro\` ➟ ***Drop de faux nitro**.*
\`${prefix}ghostping <@user>\` ➟ ***Permet de ghostping une personne**.*
\`${prefix}hug <@user>\` ➟ ***Permet de faire un câlin a quelqu'un**.*
\`${prefix}kiss <@user>\` ➟ ***Permet de faire un bisou a quelqu'un**.*
\`${prefix}slap <@user>\` ➟ ***Permet de gifler quelqu'un**.*
\`${prefix}token <@user>\` ➟ ***Permet d'avoir la motié du token de quelqu'un**.*
\`${prefix}coinflip\` ➟ ***Permet de jouer a pile ou face**.*
\`${prefix}add\` ➟ ***Permet d'envoyer un lien pour vous ajouter en ami**.*
`)

      }
        catch(e){}
    }
}