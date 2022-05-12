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
      marker1={props.marker1}
      marker2={props.marker2}
      marker3={props.marker3}
      marker4={props.marker4}
      marker5={props.marker5}
      markerMessage1={props.markerMessage1}
      markerMessage2={props.markerMessage2}
      markerMessage3={props.markerMessage3}
      markerMessage4={props.markerMessage4}
      markerMessage5={props.markerMessage5}
      zoom={props.zoom}
      style={{ height: "600px", width: "1000px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={props.marker1}>
        <Popup>
          {props.markerMessage1}
        </Popup>
      </Marker>
      <Marker position={props.marker2}>
        <Popup>
       {props.markerMessage2}
        </Popup>
      </Marker>
      <Marker position={props.marker3}>
        <Popup>
        {props.markerMessage3}
        </Popup>
      </Marker>
      <Marker position={props.marker4}>
        <Popup>
        {props.markerMessage4}
        </Popup>
      </Marker>
      <Marker position={props.marker5}>
        <Popup>
        {props.markerMessage5}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

//Exporting the Map function
export default Map;
