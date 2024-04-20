"use client";

import Image from "next/image";
import Map from "./pages/Map";
import Home from "./pages/Home";
import { useState } from "react";

const Main = () => {
  const [isOnHome, setIsOnHome] = useState(false);
  return (
    <main className="w-screen h-screen">{isOnHome ? <Home setIsOnHome={setIsOnHome}/> : <Map setIsOnHome={setIsOnHome}/>}</main>
  );
};

export default Main;
