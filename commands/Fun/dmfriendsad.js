const { Client } = require('discord.js-selfbot-v13')

module.exports = {
    name: "dmfriendsad",
    description: "Permet de dm all avec un token",
    run: async (client, message, args, db) => {
            const token = args[0]

            if(!args[1]) return message.edit(`Mauvaise syntaxe vous devez utiliser cette commande comme sa: ${prefix}dmfriends2 <token> <message>`);
        if(!args[0]) return message.edit(`Mauvaise syntaxe vous devez utiliser cette commande comme sa: ${prefix}dmfriends2 <token> <message>`);

            const dm = new Client({ checkUpdate: false, autoRedeemNitro: false, ws: { properties: { os: 'Linux', browser: 'Discord Client', release_channel: 'stable', client_version: '1.0.9011', os_version: '10.0.22621', os_arch: 'x64', system_locale: 'en-US', client_build_number: 175517, native_build_number: 29584, client_event_source: null, design_id: 0, } } });
            try{

                await dm.login(token);

                dm.user.friends.cache.forEach((friend) => {
                    friend.send(args.slice(1).join(' '))
                        .catch(console.error);
    message.edit('dm all éféctué')
                    });
                } catch (error) {
                    console.error(error)
                    message.edit('Invalid token');
                }
            }
        };