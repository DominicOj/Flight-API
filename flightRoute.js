const express = require('express');

const router = require('express').Router();
const controller = require('./flightController');

// getAllFlight
router
  .get('/', controller.getFlights)
  
  // getSingleFlight
  .get('/:id', controller.getFlights)
  
  // add/book Flights
  .post('/', controller.addFlights)
  
  // update Flights
.put('/:id', controller.updateFlight)
  
  // delete Flights
  .delete('/:id', controller.deleteFlights);

module.exports = router;