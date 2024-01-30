import dotenv from 'dotenv';

import mysql from "mysql2";
import { Client, Events } from "discord.js";


const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const client = new Client({
  intents: [ "Guilds", "GuildMessages", "GuildPresences", "MessageContent", "GuildMembers" ],
});

client.login(process.env.API_DISCORD_TOKEN);

client.once(Events.ClientReady, ({ user }) => {
  dbConnection.query("INSERT INTO users(user_id, user_name) VALUES (?, ?)", [
    user.id,
    user.name,
  ]);
});
