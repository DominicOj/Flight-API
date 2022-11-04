const { Flights } = require("./Flight");

const flights = ('/Flights');

const { v4: uuid } = require('uuid');

// getFlights
exports.getFlights = async (req, res) => {
  try {
    const flights = Flights;
    res.status(200).json({
      message: "AllFlights",
      flights: flights
    }
    );

  }

  catch (err) {
    res.status(404).json({ message: err });
  }


  // Add/book Flights
  exports.addFlights = async (req, res) => {
    try {
      const { title, time, price, date } = await req.body;
      const newFlights = {
        id: uuid(),
        title,
        time,
        price,
        date,

      };
      // flight.id = id;

      Flights.push(newFlights);
      const flights = Flights.push(flights);
      res.status(201).json({
        message: "Flight created",
        flights: newFlights,
      }
      );

    }

    catch (err) {
      res.status(500).json({ message: err });
    }
    // REMINDER: ALWAYS CHECK ROUTES AS THAT IS WHERE THE ROUTES ARE RENDERED



    // Get a single Flight using the id method

    exports.getFlight = async (req, res) => {
      try {
        let id = req.params.id;
        const Flight = Flights.find((Flight)   => Flight.id === id);
        const flights = Flights.push(flights);
        res.status(201).json({
          message: "Flight found",
          Flight,
        }
        );

      }

      catch (err) {
        res.status(500).json({ message: err });
      }

      // update/edit FLIGHT


      exports.updateFlight = async (req, res) => {
        try {
          let id = req.params.id;
          const Flight = Flights.findd((Flight)   => Flight.id === id);
          const { title, time, price, date } = async(req, res);
          flight.title = tile
            .flight.time = time
          flight.price = price
          flights.date = date


          res.status(200).json({
            message: "Flight updated",
            Flight,
          }
          );

        }

        catch (err) {
          res.status(500).json({ message: err });
        }

  }
// delete flights
      exports.deleteFlights = async (req, res) => {
        try {
          let id = req.params.id;
          const Flight = Flights.find((Flights) => Flight.id === id);
          Flights.splice(Flights.indexOf(flights), 1);
 res.status(200).json({
            message: "Flight deleted",
            Flight, });
          
          
        } catch (error) {
           res.status(500).json({ message: err });
      }
          }