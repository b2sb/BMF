const {
  savedb
} = require("../../index")
const {
  RichPresence,
  CustomStatus
} = require('discord.js-selfbot-v13')


module.exports = {
  name: "customstatus",
  description: "Config your status",
  run: async (client, message, args, db, prefix) => {
    try {

      async function rpx() {
        const r = new CustomStatus()
        if (db.rpcemoji) r.setEmoji(db.rpcemoji)
        if (db.rpctextstatus) r.setState(db.rpctextstatus)
        client.user.setActivity(r)
      }


      if (!args[0]) return message.edit( `▸ __**${db.footer}**__ ✫
      
      \`${prefix}customstatus emoji [emoji]\` ▸ **Vous permets de mettre un emoji dans votre status**
      \`${prefix}customstatus content [texte]\` ▸ **Vous permets de mettre un texte dans votre status**
      `)

      switch (args[0]) {
        case "emoji": {
          if (!args[1]) {
            db.rpcemoji = null
            savedb(client, db)
            message.edit( `L'Emoji du status a été supprimé\n> Tappez un \`${prefix}configrpc\` on pour re-activer votre RPC`)
            return rpx()
          } else {
            db.rpcemoji = args.slice(1).join(' ')
            savedb(client, db)
            message.edit( "L'Emoji du status a été modifié")
            return rpx()
          }
          break
        }

        case "content": {
          if (!args[1]) {
            db.rpctextstatus = null
            savedb(client, db)
            message.edit( "Le Texte du status a été supprimé")
            return rpx()
          } else {
            db.rpctextstatus = args.slice(1).join(' ')
            savedb(client, db)
            message.edit( "Le Texte du status a été modifié")
            return rpx()
          }
          break
        }
      }

    } catch (e) {
      console.log(e)
    }
  }
}