const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "help",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {


    message.edit(`
    ▸ __**${db.footer}**__ ✫
    
\`${prefix}bmf\` ➟ ***Affiche vos informations système**.*

\`${prefix}utility\` ➟ ***Panel utilitaire**.*
\`${prefix}moderation\` ➟ ***Panel modération**.*
\`${prefix}backup\` ➟ ***Panel backup**.*
\`${prefix}status\` ➟ ***Panel statuts**.*
\`${prefix}voice\` ➟ ***Panel Vocal**.*
\`${prefix}fun\` ➟ ***Panel fun**.*
\`${prefix}nsfw\` ➟ ***Panel nsfw**.*
\`${prefix}raid\` ➟ ***Panel raid**.*

\`${prefix}rotators\` ➟ ***Panel rotator status**.*
\`${prefix}configspotify\` ➟ ***Panel Spotify**.*
\`${prefix}configrpc\` ➟ ***Panel RPC**.*
\`${prefix}settings\` ➟ ***Panel paramètres**.*
# Version 0.1`)
  }
}; 