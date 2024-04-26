import React from "react";
import Globe from "./Globe";
import Fade from "./Fade";

const About = () => {
  return (
    <div className="w-screen flex flex-row justify-center items-center my-20 h-full gap-[10%] box-border">
      <div className="w-1/2 flex flex-col items-start justify-start gap-10 h-full pt-10">
        <Fade className="text-5xl text-white leading-tight" delay={0}>
          Built to Provide <br></br>
          <span className="font-bold text-purple-300">Real Time Updates</span>
        </Fade>
        <Fade className="text-lg text-purple-100 leading-loose" delay={300}>
          FoodWatch is aimed at creating a frequently updated small scale food
          security map software that derives it&apos;s data from open-source
          satellite imagery.
        </Fade><Fade className="text-lg text-purple-100 leading-loose" delay={600}>
          We hope to aide governments, especially belonging to developing and
          underdeveloped countries in identifying areas of food scarcity,
          pinpointing causes and creating sustainable food supply chains.
        </Fade>
      </div>
      <Fade className="h-full w-1/4" delay={300}>
        <Globe />
      </Fade>
    </div>
  );
};

export default About;
