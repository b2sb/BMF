const Discord = require("discord.js-selfbot-v13");
const fs = require('fs')
const { CustomStatus } = require('discord.js-selfbot-v13')

module.exports = {
  name: "ready",
  once: true,

  run: async (client) => {
    try {
      console.log(`${client.user.tag} (${client.user.id}) 🔍`)


      while (!fs.existsSync(`./db/${client.user.id}.json`)) fs.writeFileSync(`./db/${client.user.id}.json`, fs.readFileSync("./db/exemple.json"))
      while (!fs.existsSync(`./backups/${client.user.id}`)) fs.mkdirSync(`./backups/${client.user.id}`)

      const db = require(`../db/${client.user.id}.json`)

      if (db.spotifyonoff === true || db.spotifyonoff === "on"){
        const r_ = new CustomStatus()
        if (db.rpcemoji) r_.setEmoji(db.rpcemoji)
        if (db.rpctextstatus) r_.setState(db.rpctextstatus)
        const r = new Discord.SpotifyRPC(client)
        if (db.spotifylargeimage) r.setAssetsLargeImage(db.spotifylargeimage)
        if (db.spotifysmallimage) r.setAssetsSmallImage(db.spotifysmallimage)
        if (db.spotifystates) r.setState(db.spotifystates)
        if (db.spotifydetails) r.setDetails(db.spotifydetails)
        r.setStartTimestamp(Date.now())
        r.setEndTimestamp(Date.now() + db.spotifyendtimestamp || Date.now() + 1000 * (2 * 60 + 56))
      
        client.user.setActivity(r,r_);
      }

      if (db.rpcemoji || db.rpctextstatus){
        const r_ = new CustomStatus()
        if (db.rpcemoji) r_.setEmoji(db.rpcemoji)
        if (db.rpctextstatus) r_.setState(db.rpctextstatus)

        client.user.setActivity(r_)
      }

      if (db.rpconoff === true || db.rpconoff === "on"){
        const r_ = new CustomStatus()
        if (db.rpcemoji) r_.setEmoji(db.rpcemoji)
        if (db.rpctextstatus) r_.setState(db.rpctextstatus)
        const r = new Discord.RichPresence()
        if (db.rpctime) r.setStartTimestamp(Date.now())
        if (db.rpctitle) r.setName(db.rpctitle)
        if (db.appid) r.setApplicationId(db.appid)
        if (db.rpcdetails) r.setDetails(db.rpcdetails)
        if (db.rpcstate) r.setState(db.rpcstate)
        if (db.rpctype) r.setType(db.rpctype)
        if (db.rpctype === "STREAMING") r.setURL(db.twitch)
        if (db.rpcminparty !== 0 && db.rpcmaxparty !== 0) r.setParty({max: db.rpcmaxparty, current: db.rpcminparty})
        if (db.rpclargeimage) r.setAssetsLargeImage(db.rpclargeimage)
        if (db.rpclargeimagetext) r.setAssetsLargeText(db.rpclargeimagetext)
        if (db.rpcsmallimage) r.setAssetsSmallImage(db.rpcsmallimage)
        if (db.rpcsmallimagetext) r.setAssetsSmallText(db.rpcsmallimagetext)
        if (db.buttontext1 && db.buttonlink1) r.addButton(db.buttontext1, db.buttonlink1)
        if (db.buttontext2 && db.buttonlink2) r.addButton(db.buttontext2, db.buttonlink2)
        client.user.setActivity(r,r_)
      }

      if (db.rotators === true){
        if (Array.isArray(db.rotatorstext) && db.rotatorstext.length > 0) {
          let currentIndex = 0;

          function updateStatus() {
              const r = new CustomStatus();
              
              if (db.rotatorsemoji) r.setEmoji(db.rotatorsemoji);
              
              const currentText = db.rotatorstext[currentIndex];
              
              r.setState(currentText);
              
              client.user.setActivity(r);
              currentIndex = (currentIndex + 1) % db.rotatorstext.length;
          }
      
          updateStatus();
      
          setInterval(updateStatus, db.rotatorstime);
        }
      }

      }
     catch(e) {
      console.error(e)
    }
  }
}
