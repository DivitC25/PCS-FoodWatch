"use client";
// @ts-nocheck

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
  Polygon,
} from "react-leaflet";

import geodata from "../../../polygon_data.json";

interface Region {
  Region: string;
  Country: string;
  IPC_Level: number;
  Crop_Cover_Percentage: number;
  Normalized_Food_Price: number;
  GDP_Per_Capita: number;
  Pests: number;
  Transport_Network_Density: number;
  Food_Storage_Groceries: number;
  Conflict_Per_Capita: number;
  Food_Wastage_Per_Capita: number;
  Polygon: number[][];
}

const LeafletMap = ({ setMapType }: string) => {

  const foodRiskDict = ["#06E8FA", "#FADA06", "#FA9106", "#FA3106"];

  const getColor = (area: Region) => {
    if (mapType=="Default") { 
      return { color: foodRiskDict[area.IPC_Level - 1]};
    } else if (mapType == "Vegetation") {
      return {color: foodRiskDict[1]} //lowkey a v brute force sol; also unsure how many pests means which level
    } else if (mapType == "Transportation Networks") {
      return {color: foodRiskDict[2]} 
    } else {
      return {color: foodRiskDict[3]} 
    }
  };

  return (
    <MapContainer
      className="w-screen h-screen"
      center={[0, 0]}
      zoom={5}
      zoomControl={false}
      scrollWheelZoom={true}
    >
      <ZoomControl position="topright" zoomInText="+" zoomOutText="-" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        //@ts-ignore
        geodata.map((row: Region) => (
          //@ts-ignore
          <Polygon
            key={`${row.Region}, ${row.Country}`}
            pathOptions={getColor(row.IPC_Level)}
            // @ts-ignore
            positions={row.Polygon}
          >
            <Popup>
              <div className="flex flex-col">
                <h1 className="h1 font-bf">{`${row.Region}, ${row.Country}`}</h1>
                <p className="p">{`Food Scarcity Risk Level: ${row}`}</p>
                <p className="p">{`GDP Per Capita: ${row.GDP_Per_Capita}`}</p>
              </div>
            </Popup>
          </Polygon>
        ))
      }
    </MapContainer>
  );
};

export default LeafletMap;
