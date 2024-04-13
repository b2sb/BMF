const Discord = require("discord.js-selfbot-v13");
const {  savedb } = require("../../index")
const ms = require('ms')

 module.exports = {
  name: "configspotify",
  description: "Config the rpc spotify state",
  run: async (client, message, args, db, prefix) => {
    try{

      async function rpx(){
        const r = new Discord.SpotifyRPC(client)
	        if (db.spotifylargeimage) r.setAssetsLargeImage(db.spotifylargeimage) // Image ID
	        if (db.spotifysmallimage) r.setAssetsSmallImage(db.spotifysmallimage) // Image ID
	        if (db.spotifystates) r.setState(db.spotifystates) // Author
	        if (db.spotifydetails) r.setDetails(db.spotifydetails) // Song name
	        r.setStartTimestamp(Date.now())
	        r.setEndTimestamp(Date.now() + db.spotifyendtimestamp || Date.now() + 1000 * (2 * 60 + 56)) // Song length = 2m56s
        
          client.user.setActivity(r);
      }


      if (!args[0]){
        message.edit(`
    ▸ __**${db.footer}**__ ✫
        
\`${prefix}configspotify largeimage [image_id]\` ➟ ***Permet de changer la grande image**.*
\`${prefix}configspotify smallimage [image_id]\` ➟ ***Permet de changer la petite image**.*
\`${prefix}configspotify state [text]\` ➟ ***Permet de changer le nom du son**.*
\`${prefix}configspotify timestamp [number]\` ➟ ***Permet de changer le temps d'écoute**.*
\`${prefix}configspotify album [text]\` ➟ ***Permet de changer l'album**.*
`)
      }

      else if (args[0] === "largeimage"){
        if (!args[1]){
            db.spotifylargeimage = ""
            savedb(client, db)
            return message.edit("La grand image a été supprimée")
        }
        if (!args[1].startsWith("spotify:"))
        return message.edit("Votre image spotify doit ressembler à ça : `spotify:ab67616d00001e02768629f8bc5b39b68797d1bb`")

        db.spotifylargeimage = args[1]
        savedb(client, db)
        rpx()
        return message.edit("Votre grande image a été mise à jour")
      }

      else if (args[0] === "smallimage"){
        if (!args[1]){
          db.spotifysmallimage = ""
          savedb(client, db)
          return message.edit("La petite image a été supprimée")
      }
      if (!args[1].startsWith("spotify:"))
      return message.edit("Votre image spotify doit ressembler à ça: `spotify:ab67616d00001e02768629f8bc5b39b68797d1bb`")

      db.spotifysmallimage = args[1]
      savedb(client, db)
      rpx()
      return message.edit("Votre petite image a été mise à jour")
      }
      else if (args[0] === "state"){
        if (!args[1]){
          db.spotifydetails = ""
          savedb(client, db)
          return message.edit("Les détails ont été supprimés")
      }

      db.spotifydetails = args.slice(1).join(' ')
      savedb(client, db)
      rpx()
      return message.edit("Les détails a été mise à jour")
      }
      else if (args[0] === "timestamp"){
        if (!args[1]){
          db.spotify = ""
          savedb(client, db)
          return message.edit("Le temps a été supprimés")
        }

        if (isNaN(ms(args[1])))
        return message.edit("Veuillez m'indiquer un temps valide")

        db.spotifyendtimestamp = ms(args[1])
        savedb(client, db)
        rpx()
        return message.edit("Le temps a été modifié")
      }

      else if (args[0] === 'album'){
        if (!args[1]){
          db.spotifyalbum = ""
          savedb(client, db)
          return message.edit("L'album a été supprimés")
        }

        db.spotifyalbum = args.slice(1).join(' ')
        savedb(client, db)
        rpx()
        return message.edit("L'album a été mise à jour")
      }

      else if (args[0] === 'details'){
        if (!args[1]){
          db.spotifydetails = ""
          savedb(client, db)
          return message.edit("Less détails ont été supprimés")
        }

        db.spotifydetails = args.slice(1).join(' ')
        savedb(client, db)
        rpx()
        return message.edit("Les details ont été mise à jour")
      }

      else if (args[0] === "on"){
      if (db.spotifyonoff === "on") return message.edit("Le rpc est activé, je ne peux donc pas activer le status spotify")
        rpx()
        db.spotifyonoff = "on"
        savedb(client, db)
        message.edit("Le rpc a été activé")
      }
      else if (args[0] === "off"){
        client.user.setPresence({})
        db.spotifyonoff = "off"
        savedb(client, db)
        message.edit("Le rpc a été désactivé")

      }
        }
        catch(e){
          console.log(e)
        }
    }
 }