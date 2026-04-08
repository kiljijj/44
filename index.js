const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

// HTTP server صغير باش البوت يبقى أونلاين
app.get("/", (req, res) => res.send("Bot is running!"));
app.listen(3000);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN); // هاد السطر يستعمل متغير TOKEN مخفي