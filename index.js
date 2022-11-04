const express = require("express");
const { json } = require("express");
const flights = require("./flightController");
const models = require("./Flight");
const routes = require("./flightRoute");

const app = express();

// demo json file
app.use(json() );

// routes for flight
app.use("/flightRoute", routes);

// port to connect
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});