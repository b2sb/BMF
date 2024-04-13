module.exports = {

  name: "hug",

  description: "hug a user",

  run: async (client, message, args, db) => {

    try {

      if(!args[0]) return message.edit("Veuilez mentionnez quelqu'un")

message.edit(`🫂 🫶 ${args[0]} \n https://cdn.discordapp.com/attachments/1213747149091897364/1216486710360277183/IMG_1356.gif?ex=66009088&is=65ee1b88&hm=8bf0273f0049ce30d80a4da87fcfd35c6b6ffad7f573569592ac86aea41697aa& `)

    }
catch{}
  }

}