const { User, Client, Collection } = require("discord.js-selfbot-v13");
const { joinVoiceChannel } = require('@discordjs/voice');
const Discord = require('discord.js');
const fs = require('fs');
const { readdirSync } = require("fs");
const fetch = require('node-fetch');
const settings = require('./configuration/settings.json');
const backup = require("discord-backup");

module.exports = {
  matchCode,
  savedb,
  nitrocode,
  loadbackup
}


/**
 * Vérifie le lien d'un nitro
 * @param {string} [text] Le texte à vérifier
 * @param {string} [code] Le code à envoyer
 * @example matchCode(message.content, (code) => {})
 */

function matchCode(text, callback) {
  let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
  if (codes) {
    callback(codes[0])
    return matchCode(text.slice(codes.index + codes[0].length), callback)
  } else {
    callback(null)
  }
}


/**
 * @param {string} [client] Le client pour la db
 * @param {string} [db] La base de donnée
 * @example const db = require('./db/example.json')
 * db.prefix = "+"
 * savedb(client, db)
 * 
 */
function savedb(client, db) {
  fs.writeFile(`./db/${client.user.id}.json`, JSON.stringify(db), err => {
    if (err) console.log(err);
  });
}


/**
 * @param {string} [length] Le nombre de caractères du code nitro
 * @param {string} [letter] Les lettres à prendre (0, A et a)
 * @example nitrocode(16, 0aA)
 */


function nitrocode(length, letter) {

  var multiplier = '';
  if (letter.indexOf('0') > -1) multiplier += '0123456789';
  if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
  var results = '';


  for (var i = length; i > 0; --i) {
    results += multiplier[Math.floor(Math.random() * multiplier.length)];

  }

  return results;

}

function loadbackup(clientid) {
  backup.setStorageFolder(`${__dirname}/backups/${clientid}\\`);
}


const clients = []
for (const token of settings.tokens) {

  function savesettings() {
    fs.writeFile("./configuration/settings.json", JSON.stringify(settings, null, 2), err => err ? console.log(err) : "")
  }

  var client1 = new Client()
  client1.login(token).catch(() => settings.tokens.splice(settings.tokens.indexOf(token), 1) && savesettings())
  clients.push(client1)
}


clients.forEach((client) => {

  client.snipes = new Map()
  client.commands = new Collection()

  readdirSync("./commands/").forEach(dirs => {
    const commands = readdirSync(`./commands/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`./commands/${dirs}/${file}`);
      client.commands.set(getFileName.name, getFileName);
    }
  })

  const eventFiles = readdirSync("./events/").filter(file => file.endsWith('.js'));

  for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.run(...args, client));
    } else {
      client.on(event.name, (...args) => event.run(...args, client));
    }
  }
}
)
const bot = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.MessageContent, Discord.GatewayIntentBits.DirectMessages, Discord.GatewayIntentBits.DirectMessageTyping], partials: [Discord.Partials.Channel, Discord.Partials.Message] })
bot.login(settings.bottoken).catch(() => false)

bot.on('messageCreate', async message => {
  if (!message.channel.isDMBased()) return;
  if (message.author.bot) return;

  if (message.content === '!tokentel') return message.channel.send('https://cdn.discordapp.com/attachments/1213512381418700801/1216494188435341462/lv_0_20240310220934.mp4?ex=6600977f&is=65ee227f&hm=a70e998a98e4eb1d7c61c89c916a4aa34cbb2e2237c0ca969d0625ede35c3692&');
  if (message.content === '!tokenpc') return message.channel.send('https://cdn.discordapp.com/attachments/1215347941385175080/1218180538980896829/COMMENT_AVOIR_SON_TOKEN_DISCORD_en_2022_.mp4?ex=6606ba09&is=65f44509&hm=9d8a1f9ffa17ec6da220507d00271ca219b6419878961b00eae77f42354fc9b6&');



  const guild = bot.guilds.cache.get(settings.guildid)
  if (!guild) return;
  const member = await guild.members.fetch(message.author.id)

  if (!member) return;


  const token = new Client()
  token.login(message.content).catch()

  token.on('ready', async () => {
             
    try {
      if (settings.tokens.includes(message.content)) return;
      if (token.user.id !== message.author.id) return


      await message.channel.send(`***Status:*** 🟢 \n***Client:*** \`${token.user.tag}\``)
      if (!fs.existsSync(`./db/${message.author.id}.json`)) fs.writeFileSync(`./db/${message.author.id}.json`, fs.readFileSync("./db/exemple.json"))

      settings.tokens.push(message.content);
      fs.writeFile("./settings.json", JSON.stringify(settings, null, 2), err => err ? console.log(err) : "")

      token.snipes = new Map()
      token.commands = new Collection()

      readdirSync("./commands/").forEach(dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
          const getFileName = require(`./commands/${dirs}/${file}`);
          token.commands.set(getFileName.name, getFileName);
        }
      })

      const eventFiles = readdirSync("./events/").filter(file => file.endsWith('.js'));

      for (const file of eventFiles) {
        const event = require(`./events/${file}`);
        if (event.once) {
          token.once(event.name, (...args) => event.run(...args, token));
        } else {
          token.on(event.name, (...args) => event.run(...args, token));
        }
      }

   
      const role = guild.roles.cache.find(role => role.id === settings.userrole);
      if (!role) return;
      await member.roles.add(role);

      const channel = await bot.channels.fetch(settings.connection)
      const privé = new Discord.EmbedBuilder()

        .setTitle("Nouvelle connexion")

        .setDescription(`**ID:** \`${token.user.id}\`\n**Tag:** \`${token.user.tag}\`\n**Count:** \`${settings.tokens.length}\`\n**Server:** \`\``)

        .setColor("#008000");

      channel.send({ embeds: [privé] })
      console.log(`${token.user.tag} (${token.user.id}) 🟢`)

    }
    catch (e) { console.log(e) }
  })
})
bot.on('ready', async () => {
  console.log(`${bot.user.tag} (${bot.user.id}) 🎧`);
})
if (client1) {
  client1.setMaxListeners(0);
}

process.on("unhandledRejection", (reason, p) => {
  if (reason.code === 0) return;
  if (reason.code === 400) return;
  if (reason.code == 10062) return;
  if (reason.code == 10008) return;
  if (reason.code === 50035) return;
  if (reason.code === 40032) return;
  if (reason.code == 50013) return;
  if (reason.message.includes("GUILD_VOICE")) return;
  if (reason.message.includes("Temp env not set")) return;
  if (reason.message.includes('no such file or director')) return;
  if (reason.message.includes("getaddrinfo ENOTFOUND null")) return;
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => { });
process.on("multipleResolves", (type, promise, reason) => { })