const Discord = require("discord.js-selfbot-v13");
const {  savedb } = require("../../index")

 module.exports = {
  name: "rpcsettings",
  description: "Config your rpc",
  run: async (client, message, args, db, prefix) => {
    try{

        message.edit(`▸ __**${db.footer}**__ ✫

▸ Nom : ${db.rpctitle || "None"}
▸ Type : ${db.rpctype || "None"}
▸ State : ${db.rpcstate || "None"}
▸ Détails : ${db.rpcdetails || "None"}
▸ App ID : ${db.appid || "None"}
▸ Petite Image : ${db.rpcsmallimage || "None"}
▸ Texte Petite Image : ${db.rpcsmallimagetext || "None"}
▸ Grande Image : ${db.rpclargeimage || "None"}
▸ Texte Grande Image : ${db.rpclargeimagetext || "None"}`)

        }
        catch(e){}
    }
 }