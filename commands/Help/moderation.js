const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "moderation",
  description: "Menu Mod",
  run: async (client, message, args, db, prefix) => {
      message.edit(`
    ▸ __**${db.footer}**__ ✫

\`${prefix}sniper <vanityid> <url>\` ➟ ***Permet de snipe une url**.*
\`${prefix}kick <@user>\` ➟ ***Permet de kick un membre**.*
\`${prefix}ban <@user>\` ➟ ***Permet de ban un membre**.*
\`${prefix}unban <userid>\` ➟ ***Permet de unban un membre**.*
\`${prefix}kickbots\` ➟ ***Expulse tout les bots du serveur**.*
\`${prefix}clearperms\` ➟ ***Désactive la totalité des permissions dangereuse présente sur le serveur (rôles, administrateur)**.*
\`${prefix}renew\` ➟ ***Recréé le salon demandé (utilisable uniquement sur un serveur)**.*
\`${prefix}lock\` ➟ ***Permet de verrouiller un salon.***
\`${prefix}unlock\` ➟ ***Permet de déverrouiller un salon.***
\`${prefix}derank <@user>\` ➟ ***Permet d'enlever les rôles d'une personne.***
\`${prefix}bl <@user>\` ➟ ***Permet de bannir une personne de tous les serveurs.***
\`${prefix}unbl <@user>\` ➟ ***Permet de débannir une personne de tous les serveurs.***
\`${prefix}unbanall\` ➟ ***Permet de débannir tout le monde.***
\`${prefix}deafall <vocalid>\` ➟ ***Permet de mettre en sourdine toute une vocal.***
\`${prefix}undeafall <vocalid>\` ➟ ***Permet de remettre le son à toute une vocal.***
\`${prefix}muteall <vocalid>\` ➟ ***Permet de muter toute une vocal.***
\`${prefix}unmuteall <vocalid>\` ➟ ***Permet de unmuter toute une vocal.***`)
  }
}