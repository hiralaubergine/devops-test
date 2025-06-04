const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",        // or the name you created
  host: "localhost",
  database: "realestate",
  password: "yourpassword",           // leave blank if you didn’t set one
  port: 5432,
});

module.exports = pool;
