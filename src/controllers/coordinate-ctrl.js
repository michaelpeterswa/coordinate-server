// Michael Peters
// michaelpeterswa
// coordinate-ctrl.js

const { v4: uuidv4 } = require('uuid');

createCoordinate = (req, res) => {
    console.log(uuidv4())
}

updateCoordinate = async (req, res) => {
    console.log(uuidv4())
}

deleteCoordinate = async (req, res) => {
    console.log(uuidv4())
}

getCoordinateById = async (req, res) => {
    console.log(uuidv4())
}

getCoordinates = async (req, res) => {
    console.log(uuidv4())
}

module.exports = {
    createCoordinate,
    updateCoordinate,
    deleteCoordinate,
    getCoordinates,
    getCoordinateById,
}