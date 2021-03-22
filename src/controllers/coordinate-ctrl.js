// Michael Peters
// michaelpeterswa
// coordinate-ctrl.js

const db = require("better-sqlite3")("./data/data.sqlite3");
const { v4: uuidv4 } = require('uuid');

createCoordinate = (req, res) => {

    const coord = {
        "id": uuidv4(),
        "time": "10:00",
        "device": "test",
        "lat": "47.123",
        "lon": "-119.123"
    }

    const insert = db.prepare('INSERT INTO coordinates (id, time, device, lat, lon)'
            + 'VALUES (@id, @time, @device, @lat, @lon)');

    insert.run(coord.id, coord.time, coord.device, coord.lat, coord.lon)

    res.status(200).json(coord)
}

updateCoordinate = async (req, res) => {
    res.status(200).json({
        id: uuidv4()
    })
}

deleteCoordinate = async (req, res) => {
    res.status(200).json({
        id: uuidv4()
    })
}

getCoordinateById = async (req, res) => {
    res.status(200).json({
        id: uuidv4()
    })
}

getCoordinates = async (req, res) => {
    res.status(200).json({
        id: uuidv4()
    })
}

module.exports = {
    createCoordinate,
    updateCoordinate,
    deleteCoordinate,
    getCoordinates,
    getCoordinateById,
}