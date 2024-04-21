"use client";

import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import "leaflet-defaulticon-compatibility";

import React from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  ZoomControl,
} from "react-leaflet";

const LeafletMap = () => {
  return (
    <MapContainer
      className="w-screen h-screen"
      preferCanvas={true}
      center={[51.505, -0.09]}
      zoom={11}
      zoomControl={false}
      scrollWheelZoom={true}
    >
      <ZoomControl position="topright" zoomInText="+" zoomOutText="-" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          This Marker icon is displayed correctly with{" "}
          <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
