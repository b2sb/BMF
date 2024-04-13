const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "raid",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {


    message.edit(`
    ▸ __**${db.footer}**__ ✫
    
\`${prefix}banall\` ➟ ***Permet de banall**.*
\`${prefix}kickall\` ➟ ***Permet de kickall**.*
\`${prefix}delr\` ➟ ***supprime les roles**.*
\`${prefix}delc\` ➟ ***supprime les salons**.*
\`${prefix}del\` ➟ ***supprime salons & roles**.*
\`${prefix}love\` ➟ ***banall + del all**.*
\`${prefix}spamchannels <channel_name> <number> <message>\` ▸ ***Permet de spam un channel**.*
\`${prefix}renameall <newname>\` ▸ ***Permet de renommer tout le monde**.*
`)
  }
}; 