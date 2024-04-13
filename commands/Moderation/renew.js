
module.exports = {
    name: "renew",
    description: "Recreate a channel",
    run: async (client, message, args, db, prefix) => {
        if (!message.guild) return message.edit(`Cette commande est utilisable sur un serveur uniquement`)
        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.edit(`Permissions insuffisantes pour utiliser cette commande`)

        await message.guild.channels.fetch()
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel

        try {
            let ee = await channel.clone({
                name: channel.name,
                permissions: channel.permissionsOverwrites,
                type: channel.type,
                topic: channel.withTopic,
                nsfw: channel.nsfw,
                birate: channel.bitrate,
                userLimit: channel.userLimit,
                rateLimitPerUser: channel.rateLimitPerUser,
                permissions: channel.withPermissions,
                position: channel.rawPosition,
                reason:  `Salon recréé par ${message.author.tag} (${message.author.id})`
            })
            channel.delete().catch(async () => ee.delete() && message.edit("Je ne peux pas supprimer ce salon, sûrement à cause de la communauté activé"))
        } catch (error) {}
    }
}