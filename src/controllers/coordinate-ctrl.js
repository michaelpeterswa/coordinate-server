// Michael Peters
// michaelpeterswa
// coordinate-ctrl.js

const { v4: uuidv4 } = require('uuid');

createCoordinate = (req, res) => {
    res.status(200).json({
        id: uuidv4()
    })
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