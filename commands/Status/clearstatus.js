
module.exports = {
  name: "clearstatus",
  description: "Config the rpc spotify state",
  run: async (client, message, args, db, prefix) => {
    try{
      client.user.setActivity("", {
        type: "PLAYING"
    });
    message.edit("Le status a été supprimé")
    }
    catch{}
  }
}