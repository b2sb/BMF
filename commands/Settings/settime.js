const Discord = require("discord.js-selfbot-v13");
const { savedb } = require("../../index")


module.exports = {

  name: "settime",

  description: "change la db.time",

  run: async (client, message, args, db, prefix) => {

    try {
    db.time = `${args[0]}`

savedb(client, db);

    message.edit(`Le autodelete a été réglé à ${args[0]}ms`);

} catch {}
}
};