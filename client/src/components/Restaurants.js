//Importing React
import React from "react";
//Importing Map from components folder
import Map from "./Map.js";
//Importing css
import "../App.css";

//Function for Queen City page
function QueenCity(props) {

  //Assigning this to current page's restaurant data
  //Based on url (each has an index assigned from json array)
  let restaurantData = props.data;

  //If statement for is the data comes back undefined
  if (restaurantData === undefined) {
    return null;
  } else {
    //Current page's latitude and longitude
    let lat = restaurantData.latitude;
    let lon = restaurantData.longitude;


    //Return statement with all of the current page's info 
    //And map with current restaurant page's location pin

    //**FOR SOME REASON, WHEN I CHANGE PAGES, MARKER IS NOT ALWAYS IN CENTER OF MAP**
    //**UNTIL I REFRESH THE PAGE**

  return (
    <main>
      <h2 className="pageTitle">{restaurantData.name}</h2>
      <section className="infoSection">
        <h4 className="cuisine">Cuisine: {restaurantData.cuisine}</h4>
        <h4 className="about">About: {restaurantData.about}</h4>
        <h4 className="address">Address: {restaurantData.address}</h4>
        <h4 className="phoneNumber">Phone Number: {restaurantData.phoneNumber}</h4>
        <h4 className="hours">Hours: {restaurantData.hours}</h4>
        <a className="website" href={restaurantData.website} target="_blank">{restaurantData.website}</a>
      </section>
      <div className="map">
        <Map center={[lat, lon]} />
      </div>
    </main>
  );
}
}

//Exporting this function
export default QueenCity;
