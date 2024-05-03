"use client";
// @ts-nocheck

import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import "leaflet-defaulticon-compatibility";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  ZoomControl,
  Polygon,
} from "react-leaflet";

import "leaflet-loading";

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

const LeafletMap = ({ mapType }: { mapType: string }) => {
  const foodRiskDict = ["#06E8FA", "#FADA06", "#FA9106", "#FA3106", "#52030b"];

  const getMax = (accessName: string) => {
    let maxNum = 0;
    let maxRegion = "";
    //@ts-ignore
    for (let i = 0; i < geodata.length; i++) {
      //@ts-ignore
      if (geodata[i][accessName] > maxNum) {
        //@ts-ignore
        maxNum = geodata[i][accessName];
        //@ts-ignore
        maxRegion = geodata[i]["Region"];
      }
    }
    return Math.log(maxNum + 1);
  };

  const [maxVegetation, setMaxVegetation] = useState(0);
  const [maxTransportation, setMaxTransportation] = useState(0);
  const [maxPests, setMaxPests] = useState(0);
  const [maxPurchasing, setMaxPurchasing] = useState(0);
  const [maxFoodStorage, setMaxFoodStorage] = useState(0);
  const [maxConflict, setMaxConflict] = useState(0);
  const [maxFoodWaste, setMaxFoodWaste] = useState(0);

  useEffect(() => {
    setMaxVegetation(getMax("Crop_Cover_Percentage"));
    setMaxTransportation(getMax("Transport_Network_Density"));
    setMaxPests(getMax("Pests"));
    setMaxFoodStorage(getMax("Food_Storage_Groceries"));
    setMaxPurchasing(getMax("GDP_Per_Capita"));
    setMaxConflict(getMax("Conflict_Per_Capita"));
    setMaxFoodWaste(getMax("Food_Wastage_Per_Capita"));
  }, []);

  const getColor = (area: Region) => {
    if (mapType == "Food Security") {
      return { color: foodRiskDict[area.IPC_Level - 1] };
    } else if (mapType == "Vegetation") {
      const vegetationIndex = Math.max(
        Math.floor(
          (Math.log(area.Crop_Cover_Percentage * 1.1) / maxVegetation) * 4
        ),
        0
      );
      return { color: foodRiskDict[vegetationIndex] }; //lowkey a v brute force sol; also unsure how many pests means which level
    } else if (mapType == "Transportation Networks") {
      const transportIndex = Math.max(
        Math.floor(
          (Math.log(area.Transport_Network_Density * 1.1) / maxTransportation) *
            4
        ),
        0
      );
      return { color: foodRiskDict[transportIndex] };
    } else if (mapType == "Pests") {
      const pestIndex = Math.max(
        Math.floor((Math.log(area.Pests * 1.1) / maxPests) * 4),
        0
      );
      return { color: foodRiskDict[pestIndex] };
    } else if (mapType == "Purchasing Power") {
      const purchasingIndex =
        4 -
        Math.max(
          Math.floor(
            ((area.GDP_Per_Capita * 2) / Math.pow(Math.E, maxPurchasing)) * 4
          ),
          0
        );
      return { color: foodRiskDict[purchasingIndex] };
    } else if (mapType == "Food Storage Capacity") {
      const storageIndex = Math.max(
        Math.floor(
          (Math.log(area.Food_Storage_Groceries * 1.1) / maxFoodStorage) * 4
        ),
        0
      );
      return { color: foodRiskDict[storageIndex] };
    } else if (mapType == "Food Wastage") {
      const wastageIndex = Math.max(
        Math.floor(
          ((area.Food_Wastage_Per_Capita * 1.1) /
            Math.pow(Math.E, maxFoodWaste)) *
            4
        ),
        0
      );
      return { color: foodRiskDict[wastageIndex] };
    } else if (mapType == "Conflict/Disasters") {
      const conflictIndex = Math.max(
        Math.floor(
          (Math.log(area.Conflict_Per_Capita * 1.1) / maxConflict) * 4
        ),
        0
      );
      return { color: foodRiskDict[conflictIndex] };
    }
  };

  const getMapTypeName = (row: Region) => {
    switch (mapType) {
      case "Food Security":
        return `Food Security Risk Level: ${row.IPC_Level}`;
      case "Vegetation":
        return `Crop Cover (%): ${row.Crop_Cover_Percentage}`;
      case "Transportation Networks":
        return `Transport Network Density: ${row.Transport_Network_Density}`;
      case "Pests":
        return `Pest Risk Level: ${row.Pests}`;
      case "Purchasing Power":
        return `GDP Per Capita: ${row.GDP_Per_Capita}`;
      case "Food Storage Capacity":
        return `Food Storage Capacity: ${row.Food_Storage_Groceries}`;
      case "Conflict/Disasters":
        return `Conflict Incident Reports Per Capita Per Month: ${row.Conflict_Per_Capita}`;
      case "Food Wastage":
        return `Food Wastage Levels: ${row.Food_Wastage_Per_Capita}`;
      default:
        return "This is just a test";
    }
  };

  return (
  <>
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
            pathOptions={getColor(row)}
            // @ts-ignore
            positions={row.Polygon}
          >
            <Popup className="m-0 p-0 border-0 p-3">
              <div className="flex flex-col gap-1 text-white bg-zinc-900 m-4 my-6 box-border">
                <h1 className="text-md font-bold">{`${row.Region.replaceAll(
                  "_",
                  " "
                )}, ${row.Country.replaceAll("_", " ")}`}</h1>
                <p className="text-md">{getMapTypeName(row)}</p>
              </div>
            </Popup>
          </Polygon>
        ))
      }
    </MapContainer>
  </>
  );
};

export default LeafletMap;
