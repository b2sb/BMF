const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "settings",
  description: "Menu settings",
  run: async (client, message, db, args, prefix) => {
    try{

        message.edit(`
        ▸ __**${db.footer}**__ ✫
        
\`${prefix}setprefix <prefix>\` ➟ ***Défini un nouveau préfix**.*
\`${prefix}settwitch <username>\` ➟ ***Défini le nouveau twitch**.*
\`${prefix}settime <temps_en_ms>\` ➟ ***Permet de changer l'auto delete**.*
\`${prefix}nitrosniper <on/off>\` ➟ ***Activer / désactiver le sniper nitro**.*`)
    }
    catch(e){}
  }
}