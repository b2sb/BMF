const Discord = require("discord.js-selfbot-v13");
module.exports = {
  name: "say",
  description: "Saying something under someone else's identity (webhook)",
  run: async (client, message, args, db) => {
    try{

        if (!message.guild)
        return message.edit("Veuillez utiliser cette commande dans un serveur")

        if (!message.member.permissions.has("MANAGE_WEBHOOKS"))
        return message.edit("Vous n'avez pas les permissions nécéssaires pour utiliser cette commande")

        if (!args[0])
        return message.edit("Veuillez mentionner un utilisateur")

        if (!args[1])
        return message.edit("Veuillez me donner un texte à envoyer")

        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])

        message.delete().catch(() => false)

        const webhook = await message.channel.createWebhook(user.username, {
            avatar: user.displayAvatarURL({dynamic: true})
        }).catch(() => false)

        webhook.send(args.slice(1).join(' ')).catch(() => false)

        }
        catch(e){
            message.edit(`Aucun utilisateur de trouvé pour \`${args[0]}\``)
        }
    }
}