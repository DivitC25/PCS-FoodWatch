"use client";

import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph";
import dynamic from "next/dynamic";
 

interface Props {
  setIsOnHome: Dispatch<SetStateAction<boolean>>;
}

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

const Map = ({ setIsOnHome }: Props) => {
  const LeafletMap = dynamic(() => import("./components/LeafletMap"), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });

  const [mapProps, setMapProps] = useState("Food Security");

  return (
    <>
      <div className="absolute w-screen h-screen z-0">
        <LeafletMap mapType={mapProps}/>
      </div>
      <div className="h-full box-border p-1 absolute flex flex-col gap-1 z-10">
        <Sidebar setIsOnHome={setIsOnHome} setMapType={setMapProps} mapType={mapProps}/>
      </div>
    </>
  );
};

export default Map;
