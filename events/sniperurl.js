const fs = require("fs")

function saveSnipeRequest(guildId, vanityName) {
    const snipeData = JSON.parse(fs.readFileSync('vanity.json', 'utf8'));
    snipeData[guildId] = vanityName;
    fs.writeFileSync('vanity.json', JSON.stringify(snipeData, null, 2));
}

module.exports = {
    name: 'guildUpdate',
    once: false,
    run: async (client, oldGuild, newGuild) => {
        try {
            
            const snipeData = JSON.parse(fs.readFileSync('vanity.json', 'utf8'));
    
            const guildId = newGuild.id;
            if (snipeData[guildId]) {
                const vanityName = snipeData[guildId];
                await newGuild.setVanityCode(vanityName);
                delete snipeData[guildId];
                fs.writeFileSync('vanity.json', JSON.stringify(snipeData, null, 2));
            }
        } catch (error) {
            console.error(error);
        }
    }
};