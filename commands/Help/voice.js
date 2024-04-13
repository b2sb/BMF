const Discord = require("discord.js-selfbot-v13");
const { joinVoiceChannel } = require('@discordjs/voice');
const { savedb } = require("../../index")
const fs = require('fs')
module.exports = {
  name: "voice",
  description: "Activate / deactivate the sniper nitro",
  run: async (client, message, args, db, prefix) => {
    try{

        if (!args[0]){
            message.edit(
 `▸ __**${db.footer}**__ ✫
 
\`${prefix}joinvc [channel_id]\` ➟ ***Permet de rejoindre une vocale**.*
\`${prefix}voice auto [channel_id]\` ➟ ***Défini le nouveau salon vocal qui sera rejoint au démarrage**.*
\`${prefix}voice webcam <on/off>\` ➟ ***Active ou désactive le module webcam en salon vocale**.*
\`${prefix}voice stream <on/off>\` ➟ ***Active ou désactive le module stream en salon vocale**.*
             `)
        }

        if (args[0] === "auto"){
            if (!args[1]){
                db.voiceconnect = null
                savedb(client, db)
                message.edit("Le module vocale a été retiré")
            }

            const channel =  message.mentions.channels.first() || client.channels.cache.get(args[1])
            console.log(channel.type)
            if (channel.type !== "GUILD_VOICE" && channel.type !== "DEFAULT" || channel.type === "DM" || channel.type === "GROUP_DM")
            return message.edit("Le salon n'est pas un salon vocale")

            db.voiceconnect = channel.id
            savedb(client, db)
            return message.edit(`Module vocale activé dans <#${channel.id}>`)

        }

        if (args[0] === "webcam"){
            if (args[1] !== "on" && args[1] !== "off")
            return message.edit("Paramètre manquant: `on/off`")

            if (args[1] === "on"){
                db.voicewebcam = true
                savedb(client, db)
                message.edit("Le module webcam a été activé")
            }
            else{
                db.voicewebcam = false
                savedb(client, db)
                message.edit("Le module webcam a été désactivé")
            }
        }

        if (args[0] === "stream"){
            if (args[1] !== "on" && args[1] !== "off")
            return message.edit("Paramètre manquant: `on/off`")

            if (args[1] === "on"){
                db.voicestream = true
                savedb(client, db)
                message.edit("Le module streaming a été activé")
            }
            else{
                db.voicestream = false
                savedb(client, db)
                message.edit("Le module streaming a été désactivé")
            }

        }

    }
    catch(e){}
}
}