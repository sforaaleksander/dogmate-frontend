import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";

function renderMap(position) {
  //todo get them form current location based on browser info?
  return (
    <MapContainer
      className={"map"}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

function Map() {
  const [position, setPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setPosition([position.coords.latitude, position.coords.longitude]);
        console.log(new Date());
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }, []);

  return (
    <div>
      <div className="map-wrapper">
        <div id="mapId">{renderMap(position)}</div>
      </div>
    </div>
  );
}

export default Map;
