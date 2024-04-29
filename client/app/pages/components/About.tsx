"use client";

import React, { useEffect, useState } from "react";
import Globe from "./Globe";
import Fade from "./Fade";

const About = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  const breakpoint = 900;

  return (
    <div
      id="about"
      className={`w-screen flex flex-${
        width > breakpoint ? "row" : "col"
      } justify-center items-center mb-20 h-full gap-7 box-border px-[7.5%]`}
    >
      <div
        className={`w-${
          width > breakpoint ? "1/2" : "full"
        } flex flex-col items-start justify-start gap-10 h-full`}
      >
        <Fade className="text-5xl text-white leading-tight" delay={0}>
          Built to Provide <br></br>
          <span className="font-bold text-purple-300">Real Time Updates</span>
        </Fade>
        <Fade className="text-lg text-purple-100 leading-loose" delay={300}>
          FoodWatch is aimed at creating a frequently updated small scale food
          security map software that derives it&apos;s data from open-source
          satellite imagery.
        </Fade>
        <Fade className="text-lg text-purple-100 leading-loose" delay={600}>
          We hope to aid governments, especially belonging to developing and
          underdeveloped countries in identifying areas of food scarcity,
          pinpointing causes and creating sustainable food supply chains.
        </Fade>
      </div>
      <Fade
        className={`h-full w-${width > breakpoint ? "1/3" : "full"}`}
        delay={300}
      >
        <Globe />
      </Fade>
    </div>
  );
};

export default About;
