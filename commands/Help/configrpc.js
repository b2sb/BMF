const Discord = require("discord.js-selfbot-v13");
const {  savedb } = require("../../index")
const { RichPresence , CustomStatus } = require('discord.js-selfbot-v13')


 module.exports = {
  name: "configrpc",
  description: "Config your rpc",
  run: async (client, message, args, db, prefix) => {
    try{

      async function rpx(){
        const r = new RichPresence()
        if (db.rpctitle) r.setName(db.rpctitle)
        if (db.appid) r.setApplicationId(db.appid)
        if (db.rpcdetails) r.setDetails(db.rpcdetails)
        if (db.rpcstate) r.setState(db.rpcstate)
        if (db.rpctype) r.setType(db.rpctype)
        if (db.rpctype === "STREAMING") r.setURL(db.twitch)
        if (db.rpcminparty !== 0 && db.rpcmaxparty !== 0) r.setParty({max: db.rpcmaxparty, current: db.rpcminparty})
        if (db.rpctime) r.setStartTimestamp(db.rpctime)
        if (db.rpclargeimage) r.setAssetsLargeImage(db.rpclargeimage)
        if (db.rpclargeimagetext) r.setAssetsLargeText(db.rpclargeimagetext)
        if (db.rpcsmallimage) r.setAssetsSmallImage(db.rpcsmallimage)
        if (db.rpcsmallimagetext) r.setAssetsSmallText(db.rpcsmallimagetext)
        if (db.buttontext1 && db.buttonlink1) r.addButton(db.buttontext1, db.buttonlink1)
        if (db.buttontext2 && db.buttonlink2) r.addButton(db.buttontext2, db.buttonlink2)
        if (db.rpcemoji) r.setEmoji(db.rpcemoji || null)
        if (db.rpctime) r.setStartTimestamp(db.rpctime)
        client.user.setActivity(r)
      }

      if (!args[0] ){
          message.edit(`
    ▸ __**${db.footer}**__ ✫
    
\`${prefix}configrpc <on/off>\`  ➟ ***Permet de mettre le rpc sur on ou sur off**.*

\`${prefix}configrpc exemple\`  ➟ ***Vous envois une image pour configurer votre RPC**.*
\`${prefix}configrpc timestamp on/off\`  ➟ ***Permet d'activer/desactiver le timestamp**.*
\`${prefix}configrpc name [text]\`  ➟ ***Permet de changer le nom de la rpc**.*
\`${prefix}configrpc details [text]\`  ➟ ***Permet de changer les détails de la RPC**.*
\`${prefix}configrpc state [text]\`  ➟ ***Permet de changer l'état de la RPC**.*
\`${prefix}configrpc type [PLAYING, WATCHING, STREAMING, LISTENING, COMPETING]\`  ➟ ***Permet de changer le type de RPC**.*
\`${prefix}configrpc largeimage [image link] [text]\`  ➟ ***Permet de changer la grande image de la RPC**.*
\`${prefix}configrpc smallimage [image link]\` [text]  ➟ ***Permet de changer la petite image de la RPC**.*
\`${prefix}configrpc appid [application_id]\`  ➟ ***Permet de changer l'id d'application de la RPC**.*
\`${prefix}configrpc emoji [emoji]\` ➟ **Vous permets de mettre un emoji dans votre status**.*
\`${prefix}configrpc button [link] [text]\`  ➟ ***Permet d'ajouter un bouton sur la RPC**.*
\`${prefix}configrpc button2 [link] [text]\`  ➟ ***Permet d'ajouter un 2ème bouton sur la RPC**.*
\`${prefix}configrpc party <17/17>\` ➟ ***Vous permets de mettre un nombre de joueurs dans le RPC**.*
`)
          
      }
      
      // image pour config son RPC genre name / details / state / largeimage
      else if (args[0] === "exemple") return message.edit(`https://i.imgur.com/gFjNj6O.png`)

      else if (args[0] === "name"){
        {
        db.rpctitle = args.slice(1).join(' ')
        
        message.delete().catch(() => false);
        rpx() 
savedb(client, db)
        }
      }

      else if (args[0] === "timestamp"){
        if(args[1] === "off"){
          db.rpctime = null
            
            message.delete().catch(() => false);
            rpx()
        }
        {
            db.rpctime = Date.now()
            
            message.delete().catch(() => false);
            rpx()
          
        }
      }
      else if (args[0] === "emoji"){
        if (!args[1]){
          db.rpcemoji = ""
          
          message.delete().catch(() => false);
          rpx() 
savedb(client, db)
        }
        else{
        db.rpctitle = args.slice(1).join(' ')
        
        message.delete().catch(() => false);
        rpx() 
savedb(client, db)
        }
      }

      else if (args[0] === "details"){
        if (!args[1]){
          db.rpcdetails = ""
          
          message.delete().catch(() => false);
          rpx() 
savedb(client, db)
        }
        else{
        db.rpcdetails = args.slice(1).join(' ')
        
        message.delete().catch(() => false);
        rpx() 
savedb(client, db)
        }
      }

      else if (args[0] === "state"){
        if (!args[1]){
          db.rpcstate = ""
          
          message.delete().catch(() => false);
          rpx() 
savedb(client, db)
        }
        else{
        db.rpcstate = args.slice(1).join(' ')
        
        message.delete().catch(() => false);
        rpx() 
savedb(client, db)
        }
      }

      else if (args[0] === "type"){
        if (!args[1] | args[1] !== "playing" && args[1] !== "watching" && args[1] !== "listening" && args[1] !== "competing" && args[1] !== "streaming")
        return message.edit("***Veuillez choisir un type entre `playing`, `watching`, `listening`, `competing` et `streaming`**.*")

        db.rpctype = args[1].toUpperCase()
        
        message.delete().catch(() => false);
        rpx() 
savedb(client, db)
      }

      else if (args[0] === "largeimage"){
        if (!args[1]){
          db.rpclargeimage = ""
          db.rpclargeimagetext = ""
          
          message.delete().catch(() => false);
          return rpx() 
savedb(client, db)
        }
        args[1] = args[1]
        .replace('https://cdn.discordapp.com/', 'mp:')
        .replace('http://cdn.discordapp.com/', 'mp:')
        .replace('https://media.discordapp.net/', 'mp:')
        .replace('http://media.discordapp.net/', 'mp:')
      

        db.rpclargeimage = args[1]
        
        if (args[2]){
          db.rpclargeimagetext = args.slice(2).join(' ')
          
          message.delete().catch(() => false);
          rpx() 
savedb(client, db)
        }
        else{
          message.delete().catch(() => false);
          rpx() 
savedb(client, db)
        }
      }

      else if (args[0] === "smallimage"){
        if (!args[1]){
          db.rpcsmallimage = ""
          db.rpcsmallimagetext = ""
          
          message.delete().catch(() => false);
          return rpx() 
savedb(client, db)
        }

        args[1] = args[1]
        .replace('https://cdn.discordapp.com/', 'mp:')
        .replace('http://cdn.discordapp.com/', 'mp:')
        .replace('https://media.discordapp.net/', 'mp:')
        .replace('http://media.discordapp.net/', 'mp:');
        if (!args[1].startsWith('mp:')) return message.edit("***Veuillez me donner un lien discord comme ceci :*** ```diff\n- https://cdn.discordapp.com/attachments/820557032016969751/991172011483218010/unknown.png\n\n- https://media.discordapp.net/attachments/820557032016969751/991172011483218010/unknown.png\n\n+ mp:attachments/820557032016969751/991172011483218010/unknown.png```")

        db.rpcsmallimage = args[1]
        
        if (args[2]){
          db.rpcsmallimagetext = args.slice(2).join(' ')
          
          message.delete().catch(() => false);
          rpx() 
savedb(client, db)
        }
        else{
          message.delete().catch(() => false);
          rpx() 
savedb(client, db)
        }
      }

      else if (args[0] === "appid"){
        if (!args[1]){
          db.appid = ""
          
          message.delete().catch(() => false);
          return rpx() 
savedb(client, db)
        }
          if (isNaN(args[1]))
        return message.edit("***Veuillez me donner une application valide**.*")

        db.appid = args[1]
        
        message.delete().catch(() => false);
        rpx() 
savedb(client, db)
      }

      else if (args[0] === "button"){
        if (!args[1]){
          db.buttonlink1 = ""
          db.buttontext1 = ""
          
          message.delete().catch(() => false);
          return rpx() 
savedb(client, db)
        }
          if (!args[1].includes("http://") & !args[1].includes("https://"))
        return message.edit("***Veuillez me donner un lien valide**.*")

        if (!args[2])
        return message.edit("***Veuillez me donner un texte valide**.*")

          db.buttonlink1 = args[1]
          db.buttontext1 = args.slice(2).join(' ')
          
          message.delete().catch(() => false);
          return rpx() 
savedb(client, db)
      }

      else if (args[0] === "button2"){
        if (!args[1]){
          db.buttonlink2 = ""
          db.buttontext2 = ""
          
          message.delete().catch(() => false);
          return rpx() 
savedb(client, db)
        }
          
          if (!args[1].includes("http://") & !args[1].includes("https://"))
        return message.edit("***Veuillez me donner un lien valide**.*")

        if (!args[2])
        return message.edit("**.*Veuillez me donner un texte valide**.*")

        db.buttonlink2 = args[1]
        db.buttontext2 = args.slice(2).join(' ')
        
        message.delete().catch(() => false);
        rpx() 
savedb(client, db)
      }
      else if (args[0] === "on"){
        if (db.spotifyonoff === "on") return message.edit("***Le status spotify est activé, je ne peux donc pas activer le rpc**.*")

        rpx() 
savedb(client, db)
        db.rpconoff = true
        
        message.delete().catch(() => false);
      }
      else if (args[0] === "off"){
        client.user.setPresence({})
        db.rpconoff = false
        
        message.delete().catch(() => false);

      }
    }
    catch(e){console.error(e);}
  }
}