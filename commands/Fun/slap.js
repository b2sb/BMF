module.exports = {

  name: "slap",

  description: "Slap a user",

  run: async (client, message, args, db) => {

    try {

      if(!args[0]) return message.edit("Veuilez mentionnez quelqu'un")

message.edit(`✋ 🌬️  ${args[0]} \n https://cdn.discordapp.com/attachments/1213747149091897364/1216483469539016775/IMG_1353.gif?ex=66008d84&is=65ee1884&hm=7275dcca28feeb3b9b31c75914928c9caa34a8d041bd6d80af0729a43ee50d64& `)

    }
    catch{}

  }

}