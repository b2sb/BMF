const { savedb } = require("../../index")
module.exports = {
  name: "spotify",
  description: "Modifie la status",
  run: async (client, message, args, db) => {
    try{
      const r = new Discord.SpotifyRPC(client)
      r.setAssetsLargeImage("spotify:ab67706c0000da84292727befa6573dec290f664")
	    r.setState("1764.")
	    r.setDetails(`${args.slice(0).join(' ') || ""}`)
	    r.setStartTimestamp(Date.now())
      r.setEndTimestamp(Date.now() + db.spotifyendtimestamp || Date.now() + 1000 * (1 * 60 * 60 * 24)) // 24h
        
      client.user.setActivity(r)

      message.edit("Votre status a été modifié")
    }
    catch(e){}
  }
}