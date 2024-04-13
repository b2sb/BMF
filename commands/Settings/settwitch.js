const Discord = require("discord.js-selfbot-v13");
const { savedb } = require("../../index")


module.exports = {

  name: "settwitch",

  description: "change la db.twitch",

  run: async (client, message, args, db, prefix) => {

    try {
    db.twitch = `https://twitch.tv/${args[0]}`

savedb(client, db);

    message.edit(`Le twitch url a été réglé sur twitch.tv/${args[0]}`);

} catch {}
}
};