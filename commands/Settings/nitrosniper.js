const Discord = require("discord.js-selfbot-v13");
const fs = require('fs')
const { savedb } = require('../../index')
module.exports = {
  name: "nitrosniper",
  description: "Activate / Desactivate the sniper nitro",
  run: async (client, message, args, db, prefix) => {
    try{
        if (!args[0] | args[0] !== "on" & args[0] !== "off")
        return message.edit(`Veuillez écrire \`on\` ou \`off\` après la commande`)

        if (args[0] === "on"){
            db.nitrosniper = true
            savedb(client, db)
            message.edit("Le nitro sniper a été activé")
        }
        else{
            db.nitrosniper = false
            savedb(client, db)
            message.edit("Le nitro sniper a été désactivé")
        }
        }
        catch(e){console.error(e)}
    }
}