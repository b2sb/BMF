const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "utility",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(`▸ __**${db.footer}**__ ✫
    
\`${prefix}avatar <@user>\` ➟ ***Permet de voir l'avatar de quelqu'un**.*
\`${prefix}userinfo <@user>\` ➟ ***Informations utilisateur**.*
\`${prefix}banner <@user>\` ➟ ***Montre la bannière de quelqu'un**.*
\`${prefix}serverinfo <serverid>\` ➟ ***Informations serveur**.*
\`${prefix}crown <serverid>\` ➟ ***Permet de savoir qui a la crown d'un serveur**.*
\`${prefix}dmfriends <message>\` ➟ ***Permet d'envoyer un message a tout tes amis**.*
\`${prefix}ping\` ➟ ***Teste de latence**.*
\`${prefix}guildadm\` ➟ ***Permet de connaitre les serveur ou tu a all perm**.*
\`${prefix}ipinfo <ip>\` ➟ ***Permet d'avoir des informations sur une ip**.*
\`${prefix}notifs <on/off>\` ➟ ***Activer ou désactiver les notifications**.*
\`${prefix}setavatar\` ➟ ***Changer l'avatar (envoyer une image)**.*
\`${prefix}createwebhook\` ➟ ***Créé un webhook dans le salon**.*
\`${prefix}leaveserver <server id>\` ➟ ***Quitte un serveur**.*
\`${prefix}snipe\` ➟ ***Permet de voir le dernier message qui a été supprimer dans le salon**.*
\`${prefix}antigroup <on/off>\` ➟ ***Permet d'activer ou de désactiver l'anti-groupe**.*
\`${prefix}ghostping @user\` ➟ ***Permet de ghostping quelqu'un**.*
\`${prefix}spam [number] [message]\` ➟ ***Vous permets de spam un message**.*
\`${prefix}find [ID]\` ➟ ***Vous trouve un utilisateur dans les salons communs**.*
\`${prefix}closedms\` ➟ ***Ferme tout les DM's**.*
\`${prefix}clear [number]\` ➟ ***Supprimer un nombre de ses propres messages**.*
`)
  }
}; 