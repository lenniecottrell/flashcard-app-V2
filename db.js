require('dotenv').config({ debug: process.env.DEBUG });
const Pool = require('pg').Pool;
const user = process.env.DB_USER;
const secret = process.env.DB_SECRET;

//FIGURE OUT HOW TO OBSCURE THE DETAILS BEFORE UPLOADING TO GITHUB
//seems like dotenv works for the host and port but not for the user and password
const pool = new Pool({
  host: process.env.DB_HOST,
  user: user,
  password: secret,
  port: process.env.DB_PORT,
  database: 'flashcard_app'
});

module.exports = pool;