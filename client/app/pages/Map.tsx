import React from "react";
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph";

const Map = () => {
  return (
    <div className="w-1/6 h-full box-border p-1 absolute flex flex-col gap-1">
      <Sidebar />
      <Graph />
    </div>
  );
};

export default Map;
