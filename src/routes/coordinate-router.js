// Michael Peters
// michaelpeterswa
// coordinate-router.js

const express = require('express')
const CoordinateCtrl = require('../controllers/coordinate-ctrl')
const router = express.Router()

router.post('/', CoordinateCtrl.createCoordinate)
router.put('/:id', CoordinateCtrl.updateCoordinate)
router.delete('/:id', CoordinateCtrl.deleteCoordinate)
router.get('/:id', CoordinateCtrl.getCoordinateById)
router.get('/', CoordinateCtrl.getCoordinates)

module.exports = router