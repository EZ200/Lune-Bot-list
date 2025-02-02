const { red } = require('colors'),
      { botlogs } = require('../configs/channels.json'),
      { owner } = require('../configs/config.json');

module.exports = (client, error) => {
    client.channels.cache.get(botlogs).send(`<@${owner}>`, {
        embed: {
            title: "Une erreur est survenue !",
            thumbnail: "https://i.imgur.com/WipCNgF.png",
            timestamp: new Date(),
            color: client.color,
            fields: [
                {
                    name: "Erreur :",
                    value: error.message,
                    inline: true
                }
            ]
        }
    });
    console.log(`${red("[ERRORS]")} ${error.message}`)
}
