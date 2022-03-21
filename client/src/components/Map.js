//Import React
import React from 'react';
//Importing these to use for Map
import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

//Function for the map
function Map(props) {
  
  //Return statement to show the map with marker(s)
  //And marker in center of map
  return (
    <MapContainer
      center={props.center}
      zoom={13}
      style={{ height: "600px", width: "1000px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={props.center}>
        <Popup>
          This is a marker popup
        </Popup>
      </Marker>
    </MapContainer>
  );
}

//Exporting the Map function
export default Map;
