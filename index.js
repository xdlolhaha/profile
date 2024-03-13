require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

const rpc = new Discord.RichPresence()
        .setApplicationId('944298217078661201')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/watch?v=qI0pJAGgbvo&ab_channel=LilPeep`)
        .setDetails(`deathrow.lol`)
        .setName(`deathrow.lol`)
        .setState(`deathrow.lol `)
        .setParty({
            max: 5001,
            current: 3690,
            id: Discord.getUUID(),
        })
  
  .setAssetsLargeImage(`mp:attachments/1208142160973791322/1216859202480242788/1158891675888922645.png`)
      .setAssetsLargeText(`dead`)
      .setAssetsSmallImage(`attachments/1208142160973791322/1216859202480242788/1158891675888922645.png`)
      .setAssetsSmallText(`deathrow`)
  client.user.setActivity(rpc.toJSON());

    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);

