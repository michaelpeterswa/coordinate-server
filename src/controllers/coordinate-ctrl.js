// Michael Peters
// michaelpeterswa
// coordinate-ctrl.js
const path = require('path')
require('dotenv').config()

// better-sqlite3
const dbPath = path.resolve(__dirname, "../" + process.env.SQLITE3_FILE)
console.log(dbPath)
const db = require("better-sqlite3")(dbPath);
const { v4: uuidv4 } = require('uuid');


createCoordinate = (req, res) => {

    const coord = {
        "id": uuidv4(),
        "time": Number(Date.now()),
        "device": req.body.device,
        "lat": Number(req.body.lat),
        "lon": Number(req.body.lon)
    }
    console.log(req.body)
    const insert = db.prepare('INSERT INTO coordinates (id, time, device, lat, lon)'
            + 'VALUES (@id, @time, @device, @lat, @lon)');

    insert.run(coord)

    res.status(200).json(coord)
}

// updateCoordinate = async (req, res) => {
//     res.status(200).json({
//         id: uuidv4()
//     })
// }

deleteCoordinate = async (req, res) => {
    try {
        db.prepare('DELETE FROM coordinates WHERE id=(?)').run(req.params.id);
        res.status(200).json({"success": true})
    }
    catch (err) {
        console.log(err)
        res.status(404).json({error: err})
    }
}

getCoordinatesById = async (req, res) => {
    try {
        const data = db.prepare('SELECT * FROM coordinates WHERE device=(?)').all(req.params.id);
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(404).json({error: err})
    }
}

getCoordinates = async (req, res) => {
    try {
        const data = db.prepare('SELECT * FROM coordinates ORDER BY time DESC').all();
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(404).json({error: err})
    }  
}

getXCoordinates = async (req, res) => {
    try {
        const data = db.prepare('SELECT * FROM coordinates ORDER BY time DESC LIMIT (?)').all(req.params.id);
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(404).json({error: err})
    }  
}

getUniqueDevices = async (req, res) => {
    try {
        const data = db.prepare('SELECT DISTINCT(device) FROM coordinates').all();
        // clean data
        const devices = data.map(data => data.device)
        res.status(200).json(devices)
    }
    catch (err) {
        console.log(err)
        res.status(404).json({error: err})
    }  
}

module.exports = {
    createCoordinate,
    // updateCoordinate,
    deleteCoordinate,
    getCoordinates,
    getXCoordinates,
    getCoordinatesById,
    getUniqueDevices
}