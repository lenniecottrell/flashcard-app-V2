require("dotenv").config({ debug: process.env.DEBUG });
const Pool = require("pg").Pool;
const user = process.env.DB_USER;
const secret = process.env.DB_SECRET;

const pool = new Pool({
  host: process.env.DATABASE_URL,
  user: user,
  password: secret,
  port: process.env.PORT,
  database: "flashcard_app",
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
