
const { Client, Collection, UserFlags } = require("discord.js-selfbot-v13");

const Discord = require("discord.js-selfbot-v13");

module.exports = {

  name: "bmf",

  description: "Affiche les informations système",

  run: async (client, message, args, db) => {
    
    const twitchUsername = db.twitch ? db.twitch.split("https://twitch.tv/")[1] : "off";

    let content = `▸ __**${db.footer}**__ ✫
***Current Prefix*** : ${db.prefix}
***Current Twitch*** : [${twitchUsername}](${db.twitch})
***Nitro Sniper*** : ${db.nitrosniper ? "On" : "Off"}
***Auto Voice*** : ${db.voiceconnect ? "On" : "Off"}
***Voice Streaming*** : ${db.voicestream ? "On" : "Off"}
***Voice Webcam*** : ${db.voicewebcam ? "On" : "Off"}
***Logging System*** : ${db.webhooklogs ? "On" : "Off"}
***Silent Mode*** : ${db.status === "idle" ? "On" : "Off"}
***Anti Group*** : ${db.noaddgrp ? "On" : "Off"}
***Voice Mute*** : ${db.voicemute ? "On" : "Off"}
***Voice Deafen*** : ${db.voicedeaf ? "On" : "Off"}
`;
      content = content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");

    message.edit(content);
}


}