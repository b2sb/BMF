const Discord = require("discord.js-selfbot-v13");

module.exports = {

  name: "nsfw",

  description: "Menu Help",

  run: async (client, message, args, db, prefix) => {

message.edit(`

    ▸ __**${db.footer}**__ ✫

\`${prefix}search [type]\` ➟ *** photo de votre choix**.*

\`${prefix}pussy\` ➟ ***photo de chat féminin**.*
\`${prefix}boobs\` ➟ ***photo ballon de foot**.*
\`${prefix}pgif\` ➟ ***gif styler**.*
\`${prefix}4k\` ➟ ***photo 4k**.*
\`${prefix}hentai\` ➟ ***anime de fou**.*
`)

  }

}; 