const sqlite3 = require('sqlite3').verbose();
require('dotenv').config()
const path = require('path')

const dbPath = path.resolve(__dirname, process.env.SQLITE3_FILE)

let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the "' + process.env.SQLITE3_FILE + '" SQlite database.');
  });

module.exports = db