/* --------- Boiler Plate ---------- */

//Env file
require("dotenv").config();

//Importing Mongoose
const mongoose = require("mongoose");

//Connecting to database
mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@cluster0.9otjz.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Importing express and cors and using "response"
const express = require("express");
const cors = require("cors");

// Accessing the path module
const path = require("path");

//Inporting these from Express
const { request, response } = require("express");

//Initiating the database through the connection constructor, stored in a variable
const db = mongoose.connection;

//Importing the data.json file
const restaurants = require("./api/data.json");
const app = express();
const port = process.env.PORT || 5000;

/* ---------- ^ ----- ^ ----------- */

//To use cors
app.use(cors());

//To use express - converts JSON data
app.use(express.json());

//**NOT SURE WHAT THIS DOES**
app.use(express.urlencoded({ extended: true }));

//To get restaurant info
app.get("/", (request, response) => {
  response.json(restaurants)
})


// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


/*------------- Not sure this works -----------*/

//Can search for restaurants with localhost:5000/restaurants/
//And the number of the id
app.get("/:id", (request, response) => {
  //Assigns param to the request put in by user
  let param = request.params.id;
  //+param turns param string into a number..?
  //-1 makes it so that number put in lines up with id
  //To account for 0 indexing
  response.json(restaurants[+param - 1])
})


/*---------- This doesn't actually work ----------*/

//Can search for a specific restaurants by localhost:5000/search?name=
//And the name of the restaurants
app.get("/search", (request, response) => {
  let foundRestaurants = restaurants.filter(( oneRestaurant ) => {
    return oneRestaurant.name === request.query.name
  })
  response.json(foundRestaurants)
})


//Listens for whichever port is listed above
//In this case, port 5000
app.listen(port, () =>
  console.log(`Pickin' up what you're putting down on port ${port}!`)
);
