'use client';

import React, { useEffect, useState } from "react";
import members from "./members.json";
import { Fade } from "react-awesome-reveal";

interface Member {
  member: string;
  name: string;
  role: string;
}

const WhoWeAre = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  
  return (
    <div
      className="w-[100vw] flex flex-col gap-2 box-border relative pb-20 pt-20 px-[7.5%] border-t-[1px] border-slate-800"
      style={{
        backgroundColor: "hsla(261,26%,12%,1)",
        backgroundImage:
          "radial-gradient(at 93% 88%, hsla(261,56%,22%,1) 0px, transparent 50%), radial-gradient(at 60% 20%, hsla(261,26%,12%,1) 0px, transparent 20%), radial-gradient(at 12% 70%, hsla(266,46%,31%,1) 0px, transparent 40%)",
      }}
    >
      {" "}
      <Fade className="text-5xl text-white leading-snug" direction="up" triggerOnce={true}>
        <h1>
          What is <br />
          <span className="font-bold text-purple-300 text-5xl">
            PCS @ Berkeley?
          </span>
        </h1>
      </Fade>
      <Fade
        className="flex flex-col justify-center items-center my-10"
        direction="up"
        triggerOnce={true}
      >
        <p className="text-white leading-10">
          <span className="font-bold text-purple-300">
            Political Computer Science @ Berkeley
          </span>{" "}
          is a club dedicated to exploring interdisciplinary work connecting the
          technology and political fields. Don&apos;t be fooled, we have plenty
          of individuals with a strong tech background and host several web
          development/data science project each semester, but we also have room
          for individuals to explore non-technical projects relating to tech
          policy, and even code tools to help inform others about government.
          <br />
          <br />
          FoodWatch is one of our internally-run projects that we hope
          demonstrates the power of technology for social, economic, and
          political change by shining light on inequities and providing valuable
          information in order to address them.
        </p>
      </Fade>
      <div className="flex flex-col text-center justify-center items-center gap-20 my-16">
        <Fade
          className="text-5xl font-bold text-purple-300 leading-snug"
          direction="up"
          triggerOnce={true}
        >
          The FoodWatch Team
        </Fade>
        <div className="flex flex-row flex-wrap gap-12 justify-center items-center">
          {members.map(({ member, name, role }: Member, key) => (
            <Fade key={key} direction="up" delay={key * 100} triggerOnce={true}>
              <div className="flex flex-col gap-1 items-center justify-center text-center">
                <img
                  src={member}
                  className="object-cover h-28 aspect-square rounded-full mb-2"
                  alt={name}
                />
                <h2 className="text-md text-white">{name}</h2>
                <h3 className="text-sm text-purple-300">{role}</h3>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
