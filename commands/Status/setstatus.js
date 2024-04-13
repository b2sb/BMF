const { savedb } = require("../../index")
module.exports = {
  name: "setstatus",
  description: "Modifie la status",
  run: async (client, message, args, db) => {
    try{
        if (args[0] === "dnd"){
            client.user.setStatus('dnd');
            message.edit(`Vous êtes mainttenant en mode \`ne pas déranger\``)
            db.status = "dnd"
            savedb()
            }
        else if (args[0] === "idle"){
            client.user.setStatus('idle');
            message.edit(`Vous êtes mainttenant en mode \`Inactif\``)
            db.status = "idle"
            savedb()
        }
        else if (args[0] === "invisible"){
            client.user.setStatus('invisible');
            message.edit(`Vous êtes mainttenant en mode \`invisible\``)
            db.status = "invisible"
            savedb()
        }
        else if (args[0] === "online"){
            client.user.setStatus('online');
            message.edit(`Vous êtes mainttenant en mode \`En ligne\``)
            db.status = "online"
            savedb()
        }
    }
    catch(e){}
}
}