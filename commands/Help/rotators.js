const { savedb } = require("../../index");
const { CustomStatus } = require('discord.js-selfbot-v13');

module.exports = {
  name: "rotators",
  description: "Config your status",
  run: async (client, message, args, db, prefix) => {
    try {

      
      function updateStatus() {
        const r = new CustomStatus();
        
        if (db.rpcemoji) r.setEmoji(db.rpcemoji);
        
        if (db.rotatorstext && db.rotatorstext.length > 0) {
          
          const currentIndex = (Date.now() / 10000) % db.rotatorstext.length;
          r.setState(db.rotatorstext[Math.floor(currentIndex)]);
        }
        
        client.user.setActivity(r);
      }

      async function rotators() {
        
        updateStatus();

       
        setInterval(updateStatus, db.rotatorstime);
      }

      if (!args[0]) {
        message.edit(`▸ __**${db.footer}**__ ✫

\`${prefix}rotators on/off\` ▸ ***Permet d'activer/desactiver le rotator s**.*
\`${prefix}rotators time [time(ms)]\` ▸ ***Permet de mettre un emoji dans votre statut**.*
\`${prefix}rotators emoji [emoji]\` ▸ ***Permet de mettre un emoji dans votre statut**.*
\`${prefix}rotators content [texte1] [texte2] [texte3]\` ▸ ***Permet de mettre des textes dans votre statut**.*
      `);
      }

      switch (args[0]) {
        case "emoji": {

          if (!args[1]) {
            db.rotators = true;
            db.rotatorsemoji = null;
            savedb(client, db);
            message.edit(`L'Emoji du statut a été supprimé\n> Tapez \`${prefix}configrpc on\` pour réactiver votre RPC`);
            return rotators();
          } else {
            db.rotators = true;
            db.rpcemoji = args.slice(1).join(' ');
            savedb(client, db);
            message.edit("L'Emoji du statut a été modifié");
            return rotators();
          }
        }

        case "time": {

          if (!args[1]) {
            
            db.rotatorstime = "20000";
            savedb(client, db);
            message.edit("Le time du statut a été reset!");
            return rotators();
        } else {
          db.rotatorstime = args[1];
            savedb(client, db);
            message.edit(`Le time du statut a été mis sur ${args[1]}ms!`);
            return rotators();
        }}

        case "content": {

          if (args.length < 2) {
              db.rotators = false;
              db.rotatorstext = null;
              savedb(client, db);
              message.edit("Le texte du statut a été supprimé");
              return rotators();
          } else {
              db.rotators = true;
              db.rotatorstext = args.slice(1); 
              savedb(client, db);
              message.edit("Le texte du statut a été modifié");
              return rotators();
          }
          
      }
      case "on": {
        if (!premium.includes(client.user.id)) {
          return message.edit("***Tu n'a pas la permission: \`Premium 💎\` !***");
        }
            db.rotators = true;
            savedb(client, db);
            message.edit("le rotator s a été activer");
            return rotators();
    }
    case "off": {
      if (!premium.includes(client.user.id)) {
        return message.edit("***Tu n'a pas la permission: \`Premium 💎\` !***");
      }
          db.rotators = false;
          db.rotatorstext = null;
          savedb(client, db);
          message.edit("le rotator s a été désactiver");
          return rotators();
  }
  
    }
    

    } catch (e) {
      console.log(e);
    }
  }
};