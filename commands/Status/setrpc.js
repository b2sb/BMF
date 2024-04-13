const Discord = require("discord.js-selfbot-v13");
const { savedb } = require("../../index")
const { RichPresence } = require('discord.js-selfbot-v13')


 module.exports = {
  name: "setrpc",
  description: "set your rpc",
  run: async (client, message, args, db, prefix) => {
    try{

      async function rpx(){
        const r = new RichPresence()
        if (db.rpctitle) r.setName(db.rpctitle)
        if (db.appid) r.setApplicationId(db.appid)
        if (db.rpcdetails) r.setDetails(db.rpcdetails)
        if (db.rpcstate) r.setState(db.rpcstate)
        if (db.rpctype) r.setType(db.rpctype)
        if (db.rpcminparty !== 0 && db.rpcmaxparty !== 0) r.setParty({max: db.rpcmaxparty, current: db.rpcminparty})
        if (db.rpctime) r.setStartTimestamp(db.rpctime)
        if (db.rpclargeimage) r.setAssetsLargeImage(db.rpclargeimage)
        if (db.rpclargeimagetext) r.setAssetsLargeText(db.rpclargeimagetext)
        if (db.rpcsmallimage) r.setAssetsSmallImage(db.rpcsmallimage)
        if (db.rpcsmallimagetext) r.setAssetsSmallText(db.rpcsmallimagetext)
        if (db.buttontext1 && db.buttonlink1) r.addButton(db.buttontext1, db.buttonlink1)
        if (db.buttontext2 && db.buttonlink2) r.addButton(db.buttontext2, db.buttonlink2)
        client.user.setActivity(r)
      }

      if (!args[0]){
          message.edit(`▸ __**${db.footer}**__ ✫
\`${prefix}setrpc clear \` ➟ **Supprime le RPC**
\`${prefix}setrpc 1764 \` ➟ **1764 RPC**
\`${prefix}setrpc BMF \` ➟ **BMF RPC**
\`${prefix}setrpc league \` ➟ **League of Legends RPC**
\`${prefix}setrpc destiny \` ➟ **Destiny2 RPC**
\`${prefix}setrpc twitch \` ➟ **Twitch RPC**
\`${prefix}setrpc cod \` ➟ **Warzone RPC**
\`${prefix}setrpc gtav \` ➟ **GTA V RPC**
\`${prefix}setrpc valorant \` ➟ **Valorant RPC**
\`${prefix}setrpc rocketleague \` ➟ **Rocket League RPC**
\`${prefix}setrpc fallguys\` ➟ **Fall Guys RPC**
\`${prefix}setrpc apex \` ➟ **Apex Legends RPC**
\`${prefix}setrpc coldwar \` ➟ **Call of Duty Cold War RPC**
\`${prefix}setrpc tiktok [text] \` ➟ **TikTok RPC**
\`${prefix}setrpc youtube [text] \` ➟ **YouTube RPC**
\`${prefix}setrpc fortnite \` ➟ **Fortnite RPC**
\`${prefix}setrpc netflix [text] \` ➟ **Netflix RPC**
\`${prefix}setrpc vsc \` ➟ **Visual Studio Code RPC**
\`${prefix}setrpc fivem \` ➟ **FiveM RPC**
\`${prefix}setrpc python \` ➟ **Python RPC**
\`${prefix}setrpc gmod \` ➟ **Garry's Mod RPC**
\`${prefix}setrpc ph [text] \` ➟ **Pornhub RPC**
\`${prefix}setrpc disney+ [text] \` ➟ **Disney + RPC**
\`${prefix}setrpc fc24 [text] \` ➟ **FC 24 RPC**
\`${prefix}setrpc ubereats [text] \` ➟ **Uber Eats RPC**
\`${prefix}setrpc photoshop [text] \` ➟ **Photoshop RPC**
\`${prefix}setrpc kali [text] \` ➟ **Kali Linux RPC**`)
          
      }

      else if (!args[0] === "clear"){
        db.rpctitle = "",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcstate = "",
        db.rpclargeimage = "",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = "",
        db.rpctime = null,
        db.rpcminparty = 0,
        db.rpcmaxparty = 0

        savedb(client, db)
        message.edit("Le RPC a été supprimé")
        rpx()
      }

      else if (args[0] === "clear"){
        db.rpctitle = "",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcstate = "",
        db.rpclargeimage = "",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = "",
        db.rpctime = null,
        db.rpcminparty = 0,
        db.rpcmaxparty = 0

        savedb(client, db)
        message.edit("Le RPC a été supprimé")
        rpx()
      }

      else if (args[0] === "league"){
        db.rpctitle = "League of Legends",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Faille de l'invocateur (classé)",
        db.rpcminparty = 5,
        db.rpcmaxparty = 5,
        db.rpcstate = "Dans un salon, prêt à jouer !",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219926428490141816/image-removebg-preview.png?ex=660d1405&is=65fa9f05&hm=24afed3e27b9ee588ad9a12e3c3fbe55e1e232fe2372e0469b00a2c723d085df&",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le RPC a été modifié et tu joue à LOL maintenant")
        rpx()
      }

      else if (args[0] === "gtav"){
        db.rpctitle = "Grand Theft Auto V",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219927636340641883/GTA-5-Emblem-removebg-preview.png?ex=660d1525&is=65faa025&hm=b719994b97940d52deda7e77733150d631469573ee5b2935ded8554d609f1e44&",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le RPC a été modifié et tu joues à GTA V")
        rpx()
      }

      else if (args[0] === "apex"){
        db.rpctitle = "Apex Legends",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219928265070870550/apex-legends-logo-1.png?ex=660d15bb&is=65faa0bb&hm=b6bc8a446e0668b250a10db566e9b43a6f7154c448741b9e21fe20c74e541aaa&",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le RPC a été modifié et tu joues à Apex Legends")
        rpx()
      }

      else if (args[0] === "rocketleague"){
        db.rpctitle = "Rocket League",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219928041271332864/Rocket-League-Emblem.png?ex=660d1586&is=65faa086&hm=61a0b486c2f2bb7033c1307320a71890e70a4a62ecdb1f208a078e0353b76b34&",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le RPC a été modifié et tu joues à Rocket League")
        rpx()
      }

      else if (args[0] === "fallguys"){
        db.rpctitle = "Fall Guys",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219928182770110494/Fall-Guys-Emblem-1536x864.png?ex=660d15a7&is=65faa0a7&hm=af3567c43220e28883804cdfb0b7e2a53f13594d137430cb4f917c37e364a5d6&",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le RPC a été modifié et tu joues à Fall Guys")
        rpx()
      }

      else if (args[0] === "valorant"){
        db.rpctitle = "Valorant",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219927832529211462/image.png?ex=660d1554&is=65faa054&hm=c56cd991a12c13d844ca852a76aa616d84e20b0058381bf5eb480a3bf38fde85&",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le RPC a été modifié et tu joues à Valorant")
        rpx()
      }

      else if (args[0] === "destiny"){
        db.rpctitle = "Destiny 2",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Espace Social: La Tour",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219932803135832194/destiny-icon-512x475-qi0g8ih3.png?ex=660d19f5&is=65faa4f5&hm=ebacb2ff863351e852344f918b6febda95d7a56f3cede2d8d62f9a108cd397ed&",
        db.rpcsmallimage = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le RPC a été modifié et tu joues a Destiny 2")
        rpx()
      }

      else if (args[0] === "twitch"){
        db.rpctitle = "Twitch",
        db.rpctype = "WATCHING",
        db.rpcdetails = "Searching...",
        db.rpcstate = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219932583425605632/twitch_logo_icon_189242.png?ex=660d19c1&is=65faa4c1&hm=2578460fe0bad919761720ef51f5d370c968b665288d636419f7d46f6e40d850&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu cherche un stream Twitch.")
        rpx()
      }

      else if (args[0] === "cod"){   
        db.rpctitle = "Call of Duty® : Modern Warfare®",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Playing Warzone in Caldera",
        db.rpcstate = "",
        db.rpcminparty = 3,
        db.rpcmaxparty = 3,
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219932429582729246/images.png?ex=660d199c&is=65faa49c&hm=33f2b13fc4288e62b207e6fb8390fb95b416dfa49b15ecbf7206d5c3dfe3cf7c&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu joues a Modern Warfare.")
        rpx()
      }

      else if (args[0] === "coldwar"){
        db.rpctitle = "Call of Duty: Black Ops Cold War",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Zombies | Playing Round Based",
        db.rpcstate = "Playing Die Maschine on Round 935",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219928481731842070/call-of-duty-black-ops-cold-war-button-1600331013350.png?ex=660d15ef&is=65faa0ef&hm=dc118cbba5d19b98a5fcf199e197cd44c5aa2054eaff1f4ccbd8998b5ba85558&",
        db.rpcsmallimage = "",
        db.rpcminparty = 3,
        db.rpcmaxparty = 3,
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu joues a COLDWAR.")
        rpx()
      }

      else if (args[0] === "tiktok"){
        db.rpctitle = "TIKTOK",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "On Tiktok",
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219932167161909298/OaS25xNbAAAAAASUVORK5CYII.png?ex=660d195d&is=65faa45d&hm=46a7310bdeeda976d12ae5dd14e66f5cdee870cf0513e57794e4dbe19e8221f0&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu regardes des Tiktok.")
        rpx()
      }
      

      else if (args[0] === "youtube"){
        db.rpctitle = "YOUTUBE",
        db.rpctype = "WATCHING",
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "On YouTube",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219931939616718891/youtube-icon-512x512-80maysdk.png?ex=660d1927&is=65faa427&hm=6eb9cf4422a6b3cf81e7ead0d8f4e2d83600b4981723ef7fdb17b993d7ee9f7f&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(`Le status du RPC a été modifié et tu regardes ${args[1]} sur YouTube.`)
        rpx()
      }

      else if (args[0] === "fortnite"){
        db.rpctitle = "Fortnite",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Battle Royale - Dans le salon",
        db.rpcminparty = 4,
        db.rpcmaxparty = 4,
        db.rpctime = Date.now(),
        db.rpcstate = "En Section",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219931723161403442/Fortnite_F_lettermark_logo.png?ex=660d18f4&is=65faa3f4&hm=b4b5ea322144b8523512b729d91c938c339f8aa5384f9427de2c9b6067938e56&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "Palier 100",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(`Le status du RPC a été modifié et tu joues a Fortnite.`)
        rpx() 
      }

      else if (args[0] === "netflix"){
        db.rpctitle = "Netflix",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "S1:E1 #1764",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219931384865493044/netflix-icon-icon-2048x2048-yj41gpvr.png?ex=660d18a3&is=65faa3a3&hm=34225a20a007d3eb2bdfdfbbf99892d689b7064d051bbca05e5c2582e03f6020&",
        db.rpcsmallimage = "mp:attachments/1213528530843865199/1219931223988764723/image-removebg-preview_1.png?ex=660d187d&is=65faa37d&hm=b26fb75b658b335c73ede4891f9226b88ec754e6bf49532e2634d61a6cc81244&",
        db.rpcsmallimagetext = "Playing back",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(`Le status du RPC a été modifié et tu regardes ${args[1]} sur Netflix.`)
        rpx()
      }

      else if (args[0] === "vsc"){
        db.rpctitle = "Code",
        db.rpctype = "PLAYING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = `Editing index.js`,
        db.rpcstate = "Workspace: " + args.slice(1).join(' ') || "BMF.js" + "17:64",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219930817095012382/0cjUAcmuSPny62HNt.png?ex=660d181c&is=65faa31c&hm=c3275be0b996ddd4258c382cb01fd9c574dee19c1c45655cf05591dab62a1aae&",
        db.rpcsmallimage = "mp:attachments/1213528530843865199/1219929144780132404/file_type_vscode_icon_130084.png?ex=660d168d&is=65faa18d&hm=07b7ebc87eadd5a0070dd9d8df6a57254178124123ee84eb1b6ba044d604ced7&",
        db.rpcsmallimagetext = "Visual Studio Code",
        db.rpclargeimagetext = "Editing a JS file"
        
        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu joues a VSC.")
        rpx()
      }

      else if (args[0] === "fivem"){
        db.rpctitle = "FiveM",
        db.rpctype = "PLAYING",
        db.rpcdetails = `Playing on BMF RP `,
        db.rpcminparty = 1764,
        db.rpcmaxparty = 2048,
        db.rpcstate = "#1764",
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219929631189241929/AAAAAElFTkSuQmCC.png?ex=660d1701&is=65faa201&hm=10f85b4a951b100ce33685e6df4fcc0011295fa8cec2cb8e6d2eb4a79a9c0027&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu joues a FiveM.")
        rpx()
      }

      else if (args[0] === "python"){
        db.rpctitle = "Code",
        db.rpctype = "PLAYING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = `In BMF - 0 problems found`,
        db.rpcstate = "Working on" + args.slice(1).join(' ') || "BMF.js" + "17:64",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219928947123425351/python_18894.png?ex=660d165e&is=65faa15e&hm=60730d522bc3545c3f2cd54c0338ba069e1b3e4726434dcd40d8c4a719b81c9f&",
        db.rpcsmallimage = "mp:attachments/1213528530843865199/1219929144780132404/file_type_vscode_icon_130084.png?ex=660d168d&is=65faa18d&hm=07b7ebc87eadd5a0070dd9d8df6a57254178124123ee84eb1b6ba044d604ced7&",
        db.rpcsmallimagetext = "Visual Studio Code",
        db.rpclargeimagetext = "Editing a PY file"
        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu dev en PY.")
        rpx()
      }

      else if (args[0] === "gmod"){
        db.rpctitle = "Garry's Mod",
        db.rpctype = "PLAYING",
        db.rpcdetails = `In BMF - Best Server 👑`,
        db.rpcstate = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219928528569630720/2048px-Garry27s_Mod_logo.png?ex=660d15fa&is=65faa0fa&hm=47b956f5945f7c8bf01be2ff804268c4ca1869282fe916526cf510a105ffa344&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu joues a Gmod.")
        rpx()
      }

      else if (args[0] === "ph"){
        db.rpctitle = "PornHub",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "Ta grosse mere",
        db.rpcstate = "On Pornhub",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219928191117037619/Zq84XDo9ap2Ll7hceddV7xcoUNqFQuw8KT0ZhIwq16DwZBQ2olC7DwpPRmEjCrX7oPBkFDaiULsPCk9GYSMKtfug8GQUNvqpQvFLsduzFZbpVS1HyqMEskpVbqlO7A1AAAAAAAAAAAAAAAAAAAAAAAAAJ3wF9WoT8OISZiAAAAAElFTkSuQmCC.png?ex=660d15a9&is=65faa0a9&hm=c18891f0d6174c13b54842481c4ec8dbdad59249b322fbdc905091365a711485&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu es sur PornHub.")
        rpx()
      }

      else if (args[0] === "disney+"){
        db.rpctitle = "Disney+",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "On Disney+",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219928008979124224/apps.png?ex=660d157e&is=65faa07e&hm=47fda3977c178e5bd30a54099907f910909b5b518ef1b48bc5b4f91c6106aa02&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu es sur Disney+.")
        rpx()
      }

      else if (args[0] === "fc24"){
        db.rpctitle = "FC 24",
        db.rpctype = "PLAYING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "#EA",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219927845338353704/F0nATxmaYAEWeXP.png?ex=660d1557&is=65faa057&hm=7e25c839d5733914d8bec6ae41bbbce8626a5285ad26f2e9aefa1c49d92779ee&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu es sur FC 24.")
        rpx()
      }

      else if (args[0] === "ubereats"){
        db.rpctitle = "UBER EATS",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "On Uber Eats",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219927164179320915/uber-eats-logo-39748746B7-seeklogo.png?ex=660d14b5&is=65fa9fb5&hm=66d7a17cdccb7406403827a36faf12c89fbf49bca9602822627484bcd02a5795&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu es sur Uber Eats.")
        rpx()
      }

      else if (args[0] === "photoshop"){
        db.rpctitle = "Photoshop",
        db.rpctype = "PLAYING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = "Edtiting : " + args.slice(1).join(' ') || "BMF.psd",
        db.rpcstate = "On Photoshop",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219926921568194590/photoshop-icon-1024x999-xhts0syq.png?ex=660d147b&is=65fa9f7b&hm=f4f098b9b13e149450c2718a4d6f9daf5d517474e227358cec6cd5f5ae922648&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu es sur Photoshop.")
        rpx()
      }
      

      else if (args[0] === "kali"){
        db.rpctitle = "KALI LINUX",
        db.rpctype = "COMPETING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = "Terminal : " + args.slice(1).join(' ') || "BMF",
        db.rpcstate = "On Kali Linux",
        db.rpclargeimage = "mp:attachments/1213528530843865199/1219926536669364265/1200px-Kali-dragon-icon.png?ex=660d141f&is=65fa9f1f&hm=c21a3db6c218528670529af1dce89bbef2226d2155ef920fb6bb5704996df4e8&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu es sur LINUX.")
        rpx()  
      }

      else if (args[0] === "1764"){
        db.rpctitle = "Sanction.",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpctype = "COMPETING",
        db.rpcdetails = "1764",
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1220268767523897415/1220465233244721316/image-removebg-preview_4.png?ex=660f09d2&is=65fc94d2&hm=a8d19c3425d98f1be4d1bdac0168f83dd0a2b6ca53367412321adc3eff0f9092&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu participe a 1764.")
        rpx()
      }

      else if (args[0] === "BMF"){
        db.rpctitle = "BMF",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpctype = "STREAMING",
        db.rpcdetails = "BMF",
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1208099954003025921/1208101059436740649/Sans_titre_2_20240211150946.png?ex=65e20eca&is=65cf99ca&hm=8cca02fe16afd742c621fc2b867dc8a88a0f41d1029311650ec51d52f9675af6&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu participe a BMF.")
        rpx()
      }
      
      else if (args[0] === "kira"){
        db.rpctitle = "BMF",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpctype = "STREAMING",
        db.buttontext1 = "Regarder",
        db.buttonlink1 = "https://netflix.com/BMF",
        db.rpcdetails = "Black Mafia family’s 🌿",
        db.rpcstate = "Top 1 film 🎥 🍿",
        db.rpclargeimage = "mp:attachments/1206323013117808713/1208110007573544960/IMG_1664.jpg?ex=65e2171f&is=65cfa21f&hm=f93c0b6e0a2ea87be3197fb0b28973e413a2efcf79b7273deda502bf99b88ba4&",
        db.rpcsmallimage = "mp:attachments/1070132157512695828/1076181682606051409/926541821293764658.png",
        db.rpcsmallimagetext = "Playing Back",
        db.rpclargeimagetext = ""
        savedb(client, db)
        message.edit("Le status du RPC a été modifié et tu participe a bmf.")
        rpx()
      }
      
    }catch{}
  }  
}