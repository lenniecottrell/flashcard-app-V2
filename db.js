require("dotenv").config({ debug: process.env.DEBUG });
const { Pool, Client } = require("pg");
const user = process.env.USER_LOCAL;
const secret = process.env.PASSWORD_LOCAL;
const host = process.env.HOST_LOCAL;

//I don't know if I'll need this
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  //Local creds
  user: user,
  password: secret,
  host: host,
  port: 5432,
  database: "flashcard_app",
});

module.exports = { pool, client };
