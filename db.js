require("dotenv").config({ debug: process.env.DEBUG });
const Pool = require("pg").Pool;
// const user = process.env.DB_USER;
// const secret = process.env.DB_SECRET;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  // host: process.env.DB_HOST,
  // user: user,
  // password: secret,
  // port: process.env.PORT,
  // database: "flashcard_app",
});

module.exports = pool;
