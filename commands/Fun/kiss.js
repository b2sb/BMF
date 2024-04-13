module.exports = {

  name: "kiss",

  description: "kiss a user",

  run: async (client, message, args, db) => {

    try {

      if(!args[0]) return message.edit("Veuilez mentionnez quelqu'un")

message.edit(`💋❤️‍🔥  ${args[0]} \n https://cdn.discordapp.com/attachments/1213747149091897364/1216487815907381349/IMG_1357.gif?ex=66009190&is=65ee1c90&hm=43ba449d6099ec0e0b5895a321e239bf88695600158fc83f9560da035f22437c& `)

    }
catch{}
  }

}