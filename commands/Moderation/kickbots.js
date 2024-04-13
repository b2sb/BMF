module.exports = {
    name: "kickbots",
    description: "Kick all bots from the server",
    run: async (client, message, args, db, prefix) => {
        if (!message.guild) return message.edit(`Cette commande est utilisable sur un serveur uniquement`)
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.edit(`Permissions insuffisantes pour utiliser cette commande`)
        

        await message.guild.members.fetch()

        let kicked = 0
        let notkicked = 0

        message.guild.members.cache.map((member) => {
            member.user.bot ? member.kick("Kick bots").then(() => kicked++).catch(() => notkicked++) : ""
        })

        message.edit(`${kicked} bots ont été **exupulser**\n${notkicked} bots n'ont pas pu être **expulser**`)
    }
}