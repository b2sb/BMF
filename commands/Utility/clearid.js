    module.exports = {
        name: "clearid",
        description: "Efface un nombre spécifique de messages dans un canal spécifié par son identifiant",
        run: async (client, message, args, db) => {
            try {
                await message.edit(`**${db.footer}**`);
                await message.delete().catch(() => false);

                const channelId = args[0];
                const nombre = parseInt(args[1]) || 9999999;
                let i = 0;

                const channel = await client.channels.fetch(channelId);
                if (!channel) return console.log("Channel not found.");

                const fetchedMessages = await channel.messages.fetch({ limit: nombre });

                fetchedMessages.forEach(singleMessage => {
                    if (singleMessage.author.id === client.user.id) {
                        if (i === nombre) return;
                        singleMessage.delete().catch(err => { });
                        i++;
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
    }
