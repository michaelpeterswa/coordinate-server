// Michael Peters
// michaelpeterswa
// coordinate-router.js

const express = require('express')
const CoordinateCtrl = require('../controllers/coordinate-ctrl')
const router = express.Router()
const passport = require('passport')

router.post('/', passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
    CoordinateCtrl.createCoordinate)

// router.put('/:id', passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
//     CoordinateCtrl.updateCoordinate)

router.get('/devices', passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
    CoordinateCtrl.getUniqueDevices)

router.get('/x/:id', passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
    CoordinateCtrl.getXCoordinates)

router.delete('/:id', passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
    CoordinateCtrl.deleteCoordinate)

router.get('/:id', passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
    CoordinateCtrl.getCoordinatesById)

router.get('/', passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
    CoordinateCtrl.getCoordinates)



// router.get('/', CoordinateCtrl.getCoordinates)

module.exports = router