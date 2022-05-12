//Import React
import React from "react";
//Importing these to use
import { useState, useEffect } from "react";
//Importing each of these things to allow navigation between pages
import { Routes, Route, NavLink } from "react-router-dom";
//Importing home page and other restaurant pages
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
//Importing css file
import "./App.css";

//App function to display on page
function App() {

  //Using useState to change 'data' with 'setData' function
  const [data, setData] = useState([]);

  //Async function for fetching the data
  useEffect(() => {
    let fetchData = async () => {
      //Fetching data from url where data is housed
      let response = await fetch("http://localhost:5000");
      //Waiting on data to arrive
      let restaurantData = await response.json();
      //Calling the setData function to change state of data
      setData(restaurantData);
    };
    //Calling fetchData function above
    fetchData();
  }, []);

  //The nav bar with links to different restaurant pages
  //Routes that route to the different pages on the website
  //The Routes all have the same component page... 
  //But the data is coming from different indexes in the data array
  return (
    <main className="wholePage">
      <h1 className="title">Yelpington</h1>
      <nav className="navBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/queen-city">Queen City Brewery</NavLink>
        <NavLink to="/zero-gravity">Zero Gravity Brewery</NavLink>
        <NavLink to="/stone-corral">Stone Corral Brewery</NavLink>
        <NavLink to="/hatchet">Hatchet</NavLink>
        <NavLink to="/black-flannel">Black Flannel Brewing Co.</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home data={data}/>}></Route>
        <Route path="/queen-city" element={<Restaurants data={data[0]}/>}></Route>
        <Route path="/zero-gravity" element={<Restaurants data={data[1]}/>}></Route>
        <Route path="/stone-corral" element={<Restaurants data={data[2]}/>}></Route>
        <Route path="/hatchet" element={<Restaurants data={data[3]}/>}></Route>
        <Route path="/black-flannel" element={<Restaurants data={data[4]}/>}></Route>
      </Routes>
    </main>
  );
}

//Exporting this App function
export default App;
