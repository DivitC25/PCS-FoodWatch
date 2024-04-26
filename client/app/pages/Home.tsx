"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Navbar from "./components/Navbar";
import Sources from "./components/Sources";
import WhoWeAre from "./components/WhoWeAre";
import SectionSwitcher from "./components/SectionSwitcher";
import About from "./components/About";
import Fade from "./components/Fade";
import Model from "./components/Model";
import Divider from "./components/Divider";

interface Props {
  setIsOnHome: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ setIsOnHome }: Props) => {
  const [currSection, setCurrSection] = useState("About");

  return (
    <div className="w-screen relative bg-darkpurple overflow-hidden box-border">
      <div className="w-screen relative bg-darkpurple overflow-hidden box-border">
        <Navbar setIsOnHome={setIsOnHome} />
        <div className="w-screen h-[60vh] relative flex flex-col justify-center items-start text-white">
          <video
            src="/map-vid.mp4"
            className="w-screen h-full absolute top-0 left-0 object-cover"
            autoPlay={true}
            muted
            loop
          ></video>
          <div className="absolute h-full w-screen bg-black opacity-40"></div>
          <div className="w-1/4 h-full flex flex-col justify-center items-start gap-4 ml-[4%]">
            <Fade className="relative text-5xl font-bold scale-y-105" delay={0}>
              A Small Scale Food Scarcity Map
            </Fade>
            <Fade className="relative" delay={0}>
              Built to provide real-time global data to best understand the
              hunger crisis
            </Fade>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center duration-1000 transition">
          {currSection == "About" ? (
            <About />
          ) : currSection == "Sources" ? (
            <Sources />
          ) : (
            <Model />
          )}
        </div>
        <SectionSwitcher
          currSection={currSection}
          setCurrSection={setCurrSection}
          sectionOptions={["About", "Sources", "Model"]}
        />
      </div>
      <WhoWeAre />
    </div>
  );
};

export default Home;
