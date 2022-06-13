/* Setup

   1. Open Secrets(Lock)

   2. Put "token" as key (no spaces)
Add your bot's token in value and click add new secret

*/

/* If you use uptimerobot to ping, delete this line and line 20

const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Here is where you need to code
  if(message.content == "Hi") {
    message.channel.send("hello");
  }
});

client.on('message', message => {
  if(message.content == "Bye") {
    message.channel.send("Sad to see you go.");
  }
});

client.on('message', message => {
  if(message.content == "Hello") {
    message.channel.send("Sup!");
  }
});

client.on('message', message => {
  if(message.content == "How are you?") {
    message.channel.send("I'm fine");
  }
});

client.on('message', message => {
  if(message.content == "HRU") {
    message.channel.send("Fine");
  }
});

client.login(process.env.token);