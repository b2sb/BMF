const Discord = require("discord.js-selfbot-v13");
const {  savedb } = require("../../index")
const backup = require("discord-backup");

 module.exports = {
  name: "backup",
  description: "Config your rpc",
  run: async (client, message, args, db, prefix) => {
    try{

      async function check(){

      }
      if (!args[0]){message.edit(` ▸ __**${db.footer}**__ ✫

\`${prefix}backup create <serverid>\` ➟ ***Vous permets de créer une backup**.*
\`${prefix}backup load [id]\` ➟ ***Vous permets de charger une backup**.*
\`${prefix}backup list\` ➟ ***Vous permets de voir la liste des backups**.*
\`${prefix}backup info [id]\` ➟ ***Vous permets d'avoir des info sur une backup**.*
`)}

      if (args[0] === "create"){        if (!message.guild)
        if (!args[1]) return message.edit("***Veuillez spécifier l'identifiant du serveur**.*");
    
        var guild = client.guilds.cache.get(args[1]);
        
        if (!guild) return message.edit(`***Aucun serveur trouvé pour l'identifiant ${args[1]}**.*`);
    
        backup.create(guild, {
            maxMessagesPerChannel: 0,
            jsonBeautify: true,
            doNotBackup: ["emojis", "bans"],
            saveImages: "base64"
        }).then(async (BackupData) => {
            message.edit(`***Backup créé, voici son ID : ${BackupData.id}**.*`);
        });
    }


      else if (args[0] === "load"){
                  if (!message.guild)
        return message.edit(`***Veuillez executer cette commande dans un serveur**.*`)
        await check()
        if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.edit(`***Vous n'avez pas les permissions nécessaires**.*`)

        if (!args[1]) 
        return message.edit(`***veuillez préciser l'id de la backup**.*`)

        backup.fetch(args[1]).then(() => {
          try{
            backup.load(args[1], message.guild, {
              clearGuildBeforeRestore: true
            })          }
          catch(e){console.log(e)}
        })
        .catch(async () => message.edit(`***Aucune backup de trouvé pour ${args[0]}**.*`))
      }

      else if (args[0] === "info"){
        if (!args[1]) 
        return message.edit(`***veuillez préciser l'id de la backup**.*`)

        backup.fetch(args[1]).then(async (backupinfos) => {
          const date = new Date(backupinfos.data.createdTimestamp);
          const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
          const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

          const guild = await client.guilds.fetch(backupinfos.data.guildID)

          message.edit(`***${guild ? `Nom du serveur: ${guild.name}` : `ID du serveur: ${backupinfos.data.guildID}**.*`}
ID de la backup: ${backupinfos.id}
Taille: ${backupinfos.size} kb
Créé le: ${formatedDate}
${backupinfos.data.iconURL ? `***Icon du serveur: ${backupinfos.data.iconURL}` : ""}
${backupinfos.data.bannerURL ? `Bannière du serveur: ${backupinfos.data.bannerURL}` : ""}**.*`).catch(() => false)
        })
        .catch(async () => message.edit(`***Aucune backup de trouvé pour ${args[0] || " "}**.*`))

      }
      else if (args[0] === "list" || args[0] === "l"){
        let count = 15;
      let p0 = 0;
      let p1 = count;

      if (args[1] && isNaN(args[1])) {
        backup.list().then(async (backups) => {

          let backupFetched = [];
          for (let i = 0; i < backups.length; i++) {
            const fetchingBackup = await backup.fetch(backups[i])
            backupFetched.push(fetchingBackup)
          }
          const backupInfos = (await Promise.all(backupFetched.sort(function(a, b) {
            return a.data.name.localeCompare(b.data.name)
          }).filter(b => b.data.name.toLowerCase().includes(args[1].toLowerCase())).slice(p0, p1).map((e, i) => `${e.data.name} ▸ ***${e.id}***`))).join('\n')

          return message.edit(`${backupInfos.length > 0 ? backupInfos : "***Aucune backup**.*"}`)
        })
      } else if (!isNaN(args[1])) {
        switch (args[1]) {
          default:
            p0 = p0 + count * args[1]
            p1 = p1 + args[1] * count
            break
          case 1:
            p0 = 0
            p1 = p1 * args[1]
            break
        }

        backup.list().then(async (backups) => {

          let backupFetched = [];
          for (let i = 0; i < backups.length; i++) {
            const fetchingBackup = await backup.fetch(backups[i])
            backupFetched.push(fetchingBackup)
          }
          const backupInfos = (await Promise.all(backupFetched.sort(function(a, b) {
            return a.data.name.localeCompare(b.data.name)
          }).slice(p0, p1).map((e, i) => `${e.data.name} ▸ ***${e.id}***`))).join('\n')

          message.edit(`${backupInfos.length > 0 ? backupInfos : "***Aucune backup**.*"}`)
        })
      } else {
        backup.list().then(async (backups) => {

          let backupFetched = [];
          for (let i = 0; i < backups.length; i++) {
            const fetchingBackup = await backup.fetch(backups[i])
            backupFetched.push(fetchingBackup)
          }

          const backupInfos = (await Promise.all(backupFetched.sort(function(a, b) {
            return a.data.name.localeCompare(b.data.name)
          }).slice(p0, p1).map((e, i) => `${e.data.name} ▸ ***${e.id}***`))).join('\n')

          message.edit(`${backupInfos.length > 0 ? backupInfos : "***Aucune backup**.*"}`)
        })
      }
      }

else if (args[0] === "delete") {

        if (!args[1])
          return message.edit(`***veuillez préciser l'id de la backup**.*`);

        backup.remove(args[1])
          .then(async () => message.edit(`***Backup supprimée**.*`))
          .catch(async () => message.edit(`***Backup non trouvée**.*`));
      }
    }
    catch(e){}
}
}