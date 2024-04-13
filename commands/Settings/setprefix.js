const Discord = require("discord.js-selfbot-v13");
const { savedb } = require("../../index")
const fs = require('fs')
module.exports = {
  name: "setprefix",
  description: "Edit the prefix of the selfbot",
  run: async (client, message, args, db, prefix) => {
    try{
        console.log(db)


        if (!args[0]) 
        return message.edit("Vous devez me donner un prefix")

        if (args.length > 5)
        return message.edit(`Votre prefix ne peut pas dépasser les 5 caractères`)

        if (typeof args[0] !== "string")
        return message.edit(`Votre prefix doit être un texte`)

        message.edit(`Ton prefix est maintenant \`${args[0]}\``)
        db.prefix = `${args[0]}`
        savedb(client, db)
        }
        catch(e){}
    }
}
