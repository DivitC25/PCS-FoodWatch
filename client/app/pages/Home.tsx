"use client";

import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sources from "./components/Sources";
import WhoWeAre from "./components/WhoWeAre";
import SectionSwitcher from "./components/SectionSwitcher";
import About from "./components/About";
import Fade from "./components/Fade";
import Model from "./components/Model";
import Divider from "./components/Divider";
import RiskLevels from "./components/RiskLevels";
import Footer from "./components/Footer";


interface Props {
  setIsOnHome: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ setIsOnHome }: Props) => {
  const [currSection, setCurrSection] = useState("About");

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-screen relative bg-darkpurple overflow-hidden box-border">
      <div className="w-screen relative bg-darkpurple overflow-hidden box-border">
        <Navbar setIsOnHome={setIsOnHome} />
        <div id="top" className="w-screen h-[60vh] relative flex flex-col justify-center items-start text-white">
          <video
            src="/map-vid.mp4"
            className="w-screen h-full absolute top-0 left-0 object-cover"
            autoPlay={true}
            muted
            loop
          ></video>
          <div className="absolute h-full w-screen bg-black opacity-40"></div>
          <div
            className={`w-${
              width > 900 ? "1/3" : "2/3"
            } h-full flex flex-col justify-center items-start gap-4 mx-[4%]`}
          >
            <Fade
              className={`relative text-${
                width > 900 ? "5xl" : "3xl"
              } font-bold scale-y-105`}
              delay={0}
            >
              A Small Scale Food Security Map
            </Fade>
            <Fade className="relative" delay={0}>
              Built to provide real-time global data to best understand the
              hunger crisis
            </Fade>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center duration-1000 transition relative ${width < 900 ? "pt-20" : "pt-36"}`}
          style={{
            backgroundColor: "hsla(261,26%,12%,1)",
            backgroundImage:
              "radial-gradient(at 93% 88%, hsla(261,56%,22%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(261,26%,12%,1) 0px, transparent 50%), radial-gradient(at 12% 70%, hsla(266,46%,31%,1) 0px, transparent 50%)",
          }}
        >
          {width <= 900 ? (
            <SectionSwitcher
              currSection={currSection}
              setCurrSection={setCurrSection}
              sectionOptions={["About", "Sources", "Model"]}
            />
          ) : null}
          {currSection == "About" ? (
            <About />
          ) : currSection == "Sources" ? (
            <Sources />
          ) : (
            <Model />
          )}
          {width > 900 ? (
            <SectionSwitcher
              currSection={currSection}
              setCurrSection={setCurrSection}
              sectionOptions={["About", "Sources", "Model"]}
            />
          ) : null}
        </div>
        <div className="relative width-[100vw]">
          <WhoWeAre />
        </div>
        <div className="relative width-[100vw]">
          <RiskLevels />
        </div>
        <div className="relative width-[100vw]">
          <Footer setIsOnHome={setIsOnHome}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
