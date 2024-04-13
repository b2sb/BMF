function base64Encode(str) {

  return Buffer.from(str).toString('base64');

}

module.exports = {

  name: "token",

  description: "Send a love message",

  run: async (client, message, args, db) => {

    try {

      const mentionedUser = message.mentions.users.first();

      if (!mentionedUser) return message.edit('Vous devez mentionner quelqu\'un !');

      const userId = mentionedUser.id;

      const encodedStr = base64Encode(userId);

      const trimmedEncodedStr = encodedStr.replace(/=+$/, '');

      message.edit(`première partie du token de ${mentionedUser.tag} : ${trimmedEncodedStr}`);

    } catch (err) {

      console.error("Une erreur s'est produite :", err);

    }

  }

}

