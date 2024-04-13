const Discord = require("discord.js-selfbot-v13");
const { savedb } = require("../../index")
module.exports = {
  name: "antigroup",
  description: "Prevent people from adding you to groups",
  run: async (client, message, args, db) => {
    try{

        if (!args[0] | args[0] !== "on" & args[0] !== "off")
        return message.edit(`Veuillez écrire \`on\` ou \`off\` après la commande`)

        if (args[0] === "on"){
            if (args[1]){
                db.noaddgrp = args.slice(1).join(' ')
                message.edit("L'anti groupes a été activé avec un texte donné")
            }
            else{
                db.noaddgrp = null
                savedb(client, db)
                message.edit("L'anti groupes a été activé")
            }
        }
        else{
            db.noaddgrp = false
            savedb(client, db)
            message.edit("L'anti groupes a été désactivé")
        }




    }
        catch(e){}
    }
}