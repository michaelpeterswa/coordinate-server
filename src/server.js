// michaelpeterswa
// coordinate-server
// server.js

// npm imports
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy
var cors = require('cors')
var path = require('path')
require('dotenv').config()

// better-sqlite3
const dbPath = path.resolve(__dirname, process.env.SQLITE3_FILE)
const db = require("better-sqlite3")(dbPath);

db.prepare(
  "CREATE TABLE IF NOT EXISTS coordinates (id TEXT, time TEXT, device TEXT, lat TEXT, lon TEXT)"
).run();

// local imports
const coordinateRouter = require('./routes/coordinate-router')

// instantiate express.js
const app = express()

// port the app is currently serving to
const port = 6968

// app use directives
app.set("view engine", "ejs");
app.use(express.static("public"));
// Cross-Origin
app.use(cors())
// Body Parsing of Request/Response objects
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

function renderIndex(res, bool) {
  if (bool == true) {
    res.render("index", {
      error: true,
      key: process.env.API_KEY
    });
  } else {
    res.render("index", {
      error: false,
      key: process.env.API_KEY
    });
  }
}

// route for '/'
app.get('/', (req, res) => {
    renderIndex(res, false)
})

// initialization and implementation of api-keys
passport.initialize()
passport.use(new HeaderAPIKeyStrategy(
  { header: 'Authorization', prefix: 'Api-Key ' },
  false,
  function(apikey, done) {
      return done(null, process.env.API_KEY);
  }));

// router directives
app.use('/c', coordinateRouter)

// initialize server object and listen on "port"
const server = app.listen(port, () => console.log(`coordinate-server app listening on port ${port}!\n`))

// if router rejects api-key return 401 Unauthorized
app.get('/unauthorized', (req, res) => {
  res.status(401).json({ message: "Unauthorized" });
  })

// for all else return 404
app.use(function (req, res) {
    res.status(404).send("404");
  })

// export server object
module.exports = server