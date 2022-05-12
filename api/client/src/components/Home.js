//Importing React
import React from "react";
//Importing Map from components folder
import Map from "./Map.js";
// Link
import { Link } from "react-router-dom";
//Importing css
import "../App.css";

//Function for Home page
function Home(props) {
  //Data from index 0 in json data array (Queen City Brewery)
  let restaurantData0 = props.data[0];
  //Data from index 1 (Zero Gravity)
  let restaurantData1 = props.data[1];
  //Data from index 2 (Stone Corral)
  let restaurantData2 = props.data[2];
  //Data from index 3 (Hatchet)
  let restaurantData3 = props.data[3];
  //Data from index 4 (Black Flannel)
  let restaurantData4 = props.data[4];

  //If statement in case the data comes back undefined
  if (
    restaurantData0 === undefined ||
    restaurantData1 === undefined ||
    restaurantData2 === undefined ||
    restaurantData3 === undefined ||
    restaurantData4 === undefined
  ) {
    return null;
  } else {
    //Queen city's lat and long
    let lat0 = restaurantData0.latitude;
    let lon0 = restaurantData0.longitude;

    //Zero Gravity's lat and long
    let lat1 = restaurantData1.latitude;
    let lon1 = restaurantData1.longitude;

    //Stone corral's lat and long
    let lat2 = restaurantData2.latitude;
    let lon2 = restaurantData2.longitude;

    //Hatchet's lat and long
    let lat3 = restaurantData3.latitude;
    let lon3 = restaurantData3.longitude;

    //Black Flannel's lat and long
    let lat4 = restaurantData4.latitude;
    let lon4 = restaurantData4.longitude;

    //Return statment with home page title and 5 maps with markers
    //**NOT SURE HOW TO PUT ALL 5 MARKERS ON ONE MAP INSTEAD OF 5 MAPS**

    //I tried this in the "map div":
    // <Map center={[(lat0, lon0), (lat1, lon1), (lat2, lon2), (lat3, lon3), (lat4, lon4)]} />
    //It did not work

    return (
      <>
        <h2 className="pageTitle">Home</h2>
        <div className="map">
          <Map
            center={[44.45700282695921, -73.11212109625367]}
            marker1={[lat0, lon0]}
            marker2={[lat1, lon1]}
            marker3={[lat2, lon2]}
            marker4={[lat3, lon3]}
            marker5={[lat4, lon4]}
            markerMessage1={<Link to="/queen-city">Queen City</Link>}
            markerMessage2={<Link to="/zero-gravity">Zero Gravity</Link>}
            markerMessage3={<Link to="/stone-corral">Stone Corral</Link>}
            markerMessage4={<Link to="/hatchet">Hatchet</Link>}
            markerMessage5={<Link to="/black-flannel">Black Flannel</Link>}
            zoom={12}
          />
        </div>
      </>
    );
  }
}

//Export Home function
export default Home;
