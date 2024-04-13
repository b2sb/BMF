// command to get profile picture
const Discord = require("discord.js-selfbot-v13");


module.exports = {
  name: "status",
  description: "Menu status",
  run: async (client, message, db, args, prefix) => {
    try{

        message.edit(`
        ▸ __**${db.footer}**__ ✫

\`${prefix}setstatus [online, idle, dnd, invisible]\` ➟ ***Permet de changer le statut**.*
\`${prefix}setrpc\` ➟ ***Permet de voir les rich présence prédéfini**.*
\`${prefix}spotify [text]\` ➟ ***Permet de mettre une activité spotify**.*
\`${prefix}clearstatus\` ➟ ***Permet de retirer l'activité**.*`)

    }
    catch(e){}
  }
}