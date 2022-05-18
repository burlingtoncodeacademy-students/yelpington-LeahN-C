//Importing React
import React from "react";
// useEffect
import { useState, useEffect } from "react";
//Importing Map from components folder
import Map from "./Map.js";
//Importing css
import "../App.css";

//Function for Restaurants page
function Restaurants(props) {
  //Assigning this to current page's restaurant data
  //Based on url (each has an index assigned from json array)
  let restaurantData = props.data;

  //**FOR SOME REASON, WHEN I CHANGE PAGES, MARKER IS NOT ALWAYS IN CENTER OF MAP**
  //**UNTIL I REFRESH THE PAGE**

  const [newCenter, setNewCenter] = useState();

  useEffect(() => {
    if (restaurantData) {
      let location = [restaurantData.lat, restaurantData.lon];
      setNewCenter(location);
    }
    if (newCenter) {
      window.location.reload();
    }
  }, [restaurantData]);

  //If statement for is the data comes back undefined
  if (restaurantData === undefined) {
    return null;
  } else {
    //Current page's latitude and longitude
    let lat = restaurantData.latitude;
    let lon = restaurantData.longitude;

    let link = (
      <a className="website" href={restaurantData.website} target="_blank">
        {restaurantData.website}
      </a>
    );

    //Return statement with all of the current page's info
    //And map with current restaurant page's location pin
    return (
      <div className="wholeContainer">
        <section className="infoSection">
          <h2 className="pageTitle">{restaurantData.name}</h2>
          <h4 className="cuisine">Cuisine: {restaurantData.cuisine}</h4>
          <h4 className="about">About: {restaurantData.about}</h4>
          <h4 className="address">Address: {restaurantData.address}</h4>
          <h4 className="phoneNumber">
            Phone Number: {restaurantData.phoneNumber}
          </h4>
          <h4 className="hours">Hours: {restaurantData.hours}</h4>
          <h4 style={{ color: "salmon" }}>
            Click On The Marker For Restaurant Website
          </h4>
        </section>
        <div className="map">
          <Map
            center={[lat, lon]}
            marker1={[lat, lon]}
            marker2={[lat, lon]}
            marker3={[lat, lon]}
            marker4={[lat, lon]}
            marker5={[lat, lon]}
            zoom={13}
            markerName={restaurantData.name}
            markerMessage1={link}
            markerMessage2={link}
            markerMessage3={link}
            markerMessage4={link}
            markerMessage5={link}
          />
        </div>
      </div>
    );
  }
}

//Exporting this function
export default Restaurants;
