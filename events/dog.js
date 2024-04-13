module.exports = {
  name: "dog",
  once: false,
  run: async (channel, client) => {
    client.on('voiceStateUpdate', (oldState, newState) => {
      console.log("Voice state updated.");
      
      const member = newState.member;
      if (!member || member.user.bot) return;

      const chien = db.dogid.find(dog => dog.id === member.id);
      if (!chien) return;

      const serveur = db.guildiddog.find(guild => guild.id === newState.guild.id);
      if (!serveur) return;

      const clientInVoice = oldState.guild.voiceStates.cache.get(member.id);
      if (!clientInVoice) return;

      console.log("Old voice state:", clientInVoice.channelID);
      console.log("New voice state:", newState.channelID);

      if (clientInVoice.channelID !== newState.channelID) {
        console.log("Moving user back to the original channel.");
        newState.setChannelId(clientInVoice.channelID)

          .then(() => console.log("User moved back successfully."))
          .catch(error => console.error("Error moving user:", error));
      }
    });
  }
};
