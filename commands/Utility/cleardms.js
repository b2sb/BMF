module.exports = {
    name: "clearalldms",
    description: "Efface tous les messages privés envoyés par le bot",
    run: async (client, message, args) => {
        try {
            const users = client.users.cache.filter(user => user.dmChannel);

            users.forEach(async user => {
                try {
                    const dmChannel = await user.createDM();
                    let messages = await dmChannel.messages.fetch({ limit: 100 });
                    messages = messages.filter(msg => msg.author.id === client.user.id);
                    await Promise.all(messages.map(msg => msg.delete()));
                } catch (error) {
                    console.error(`Erreur lors de la suppression des messages privés de ${user.tag}:`, error);
                }
            });

            await message.edit("***Tous les messages privés vont etre effacés !***");
        } catch (e) {
            console.error("Une erreur s'est produite lors de l'effacement des messages privés envoyés par le bot:", e);
            await message.edit("***Une erreur s'est produite lors de l'effacement des messages privés envoyés par le bot.***");
        }
    }
}
