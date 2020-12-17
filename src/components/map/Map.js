import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./map.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 32],
  popupAnchor: [-4, -32],
});

L.Marker.prototype.options.icon = DefaultIcon;

function renderMap(userPosition) {
  //todo get them form current location based on browser info?
  return (
    <MapContainer
      className={"map"}
      center={userPosition}
      zoom={16}
      scrollWheelZoom={true}
    >
      <ChangeView center={userPosition} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={userPosition}>
        <Popup>
          You Are Here ;) <br /> Look Around.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

function Map() {
  const [userPosition, setUserPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        setUserPosition([position.coords.latitude, position.coords.longitude])
      );
      // navigator.geolocation.watchPosition(function (position) {
      //   setUserPosition([position.coords.latitude, position.coords.longitude]);
      //   console.log(new Date());
      //   console.log("Latitude is :", position.coords.latitude);
      //   console.log("Longitude is :", position.coords.longitude);
      // });
    }
  }, []);

  return (
    <div>
      <div className="map-wrapper">
        <div id="mapId">{renderMap(userPosition)}</div>
      </div>
    </div>
  );
}

export default Map;
