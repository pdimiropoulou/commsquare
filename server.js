const express = require("express");
const cors = require("cors");
const routes = require("./app/routes/kpisRouter");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// const db = require("./app/models");

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to my application." });
// });

  
app.use('/api', routes); //to use the routes

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
