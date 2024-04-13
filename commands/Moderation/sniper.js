const fs = require("fs")

module.exports = {
    name: "sniper",
    description: "Enregistre une demande de snipe de vanity pour le serveur",
    run: async (client, message, args) => {

        function saveSnipeRequest(guildId, vanityName) {
            const snipeData = JSON.parse(fs.readFileSync('vanity.json', 'utf8'));
            snipeData[guildId] = vanityName;
            fs.writeFileSync('vanity.json', JSON.stringify(snipeData, null, 2));
        }
        
        function loadSnipeRequests() {
            const snipeData = JSON.parse(fs.readFileSync('vanity.json', 'utf8'));
            return snipeData;
        }
        
        setInterval(() => {
            const snipeData = loadSnipeRequests();
            
            for (const [guildId, vanityName] of Object.entries(snipeData)) {
                const guild = client.guilds.cache.get(guildId);
                if (guild && guild.vanityURLCode === null) {
                   
                } else if (guild && guild.vanityURLCode !== null) {
                    
                    guild.setVanityCode(vanityName)
                        .then(() => {
                            message.channel.send(`Vanity URL défini avec succès pour ${guild.name} : https://discord.gg/${vanityName}`);
                            delete snipeData[guildId];
                            fs.writeFileSync('vanity.json', JSON.stringify(snipeData, null, 2));
                        })
                }
            }
        }, 1000);
        try {

            const guildId = args[0];
            const vanityName = args.slice(1).join(""); 

            const guild = client.guilds.cache.get(guildId);
            if (!guild) return message.edit("Le serveur spécifié est introuvable.");

            saveSnipeRequest(guildId, vanityName);  
            message.edit(`vanity enregistré.`);
        } catch (error) {}
    }
};