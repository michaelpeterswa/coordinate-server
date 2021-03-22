const sqlite3 = require('sqlite3').verbose();
require('dotenv').config()

let db = new sqlite3.Database(process.env.SQLITE3_FILE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the "' + process.env.SQLITE3_FILE + '" SQlite database.');
  });

module.exports = db