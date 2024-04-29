"use client";

import React, { useState, useEffect } from "react";
import {
  MdBorderColor,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import FadeCustom from "./Fade";
import { Fade } from "react-awesome-reveal";

interface RiskLevel {
  color: string;
  level: number;
  level_name: string;
  consumption: string;
  livelihood: string;
  nutrition: string;
  mortality: string;
  availability: string;
  hazards: string;
  description: string;
}

import riskLevels from "./risklevels.json";

const RiskLevels = () => {
  const [idx, setIdx] = useState(0);

  const switchForward = () => {
    setIdx((idx + 1) % 5);
  };

  const switchBack = () => {
    if (idx == 0) {
      setIdx(4);
    } else {
      setIdx(idx - 1);
    }
  };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      id="risk"  
      className={`w-[100vw] flex flex-${
        width < 1050 ? "col" : "row"
      } gap-8 box-border relative py-20 pt-20 px-[7.5%] border-t-[1px] border-slate-800`}
      style={{
        backgroundColor: "hsla(261,26%,12%,1)",
        backgroundImage:
          "radial-gradient(at 93% 88%, hsla(261,56%,22%,1) 0px, transparent 50%), radial-gradient(at 60% 20%, hsla(261,26%,12%,1) 0px, transparent 20%), radial-gradient(at 12% 70%, hsla(266,46%,31%,1) 0px, transparent 40%)",
      }}
    >
      <Fade className="flex-1" triggerOnce={true} direction="up">
        <div className="flex flex-col gap-10 flex-1">
          <h1 className="text-5xl text-white leading-snug">
            How Do We Define <br />{" "}
            <span className="font-bold text-purple-300 text-5xl">
              Food Security Risk Levels?
            </span>
          </h1>
          <p className="text-white leading-8">
            Taken directly from the{" "}
            <span className="font-bold text-purple-300">
              Integrated Food Security Phase Classification (IPC)
            </span>
            , food security risk levels are determined from numerous factors.{" "}
            <br/>
            <br />
            The{" "}
            <span className="font-bold text-purple-300">
              first-level-outcomes
            </span>{" "}
            include food consumption levels and livelihood change. <br />
            <br />
            <span className="font-bold text-purple-300">
              Second-level outcomes
            </span>{" "}
            include nutritional status and mortality. <br />
            <br />
            Some other{" "}
            <span className="font-bold text-purple-300">
              contributing factors
            </span>{" "}
            are food availability, access utilization and stability, and hazards
            and vulnerability. Read more about technical classifications in the{" "}
            <a
              className="underline font-bold hover:text-purple-300 duration-200"
              target="_blank"
              href="https://www.ipcinfo.org/fileadmin/user_upload/ipcinfo/manual/IPC_Technical_Manual_3_Final.pdf"
            >
              IPC Technical Manual.
            </a>
          </p>
        </div>
      </Fade>
      <Fade
        className="flex-1 flex flex-row gap-2 justify-center items-center"
        triggerOnce={true}
        direction="up"
      >
        <div
          className={`flex flex-${width > 800 ? "row" : "col"} gap-${
            width > 800 ? "5" : "3"
          } justify-center items-center`}
        >
          {width > 800 ? (
            <MdOutlineKeyboardArrowLeft
              className="text-white text-6xl cursor-pointer hover:text-purple-200"
              onClick={switchBack}
            />
          ) : null}
          {
            //@ts-ignore
            riskLevels
              .slice(idx, idx + 1)
              .map(
                (
                  {
                    color,
                    level,
                    level_name,
                    consumption,
                    livelihood,
                    nutrition,
                    mortality,
                    availability,
                    hazards,
                    description,
                  }: RiskLevel,
                  key
                ) => (
                  <FadeCustom
                    key={idx}
                    className={`self-stretch text-white flex flex-col bg-slate-900 p-6 rounded-lg duration-300 box-border flex-1 text-left border-[1px] border-solid border-slate-700 hover:bg-slate-800 hover:border-slate-600`}
                    delay={0}
                  >
                    <div className="flex flex-row gap-5 items-center mb-4">
                      <div
                        className={`aspect-square h-${
                          width > 700 ? "12" : "10"
                        } w-${
                          width > 700 ? "12" : "10"
                        } border-[1px] border-solid border-slate-600 rounded-md`}
                        style={{ backgroundColor: `#${color}` }}
                      ></div>
                      <h1
                        className={`text-${width > 700 ? "2" : ""}xl font-bold`}
                      >
                        {level_name}
                      </h1>
                    </div>
                    <div className="flex flex-col gap-3 text-md leading-loose">
                      <p>
                        <span className="font-bold text-purple-300">
                          Risk Level:
                        </span>{" "}
                        {level}
                      </p>
                      <p>
                        <span className="font-bold text-purple-300">
                          Description:
                        </span>{" "}
                        {description}
                      </p>
                      <p>
                        <span className="font-bold text-purple-300">
                          Food consumption:
                        </span>{" "}
                        {consumption}
                      </p>
                      <p>
                        <span className="font-bold text-purple-300">
                          Livelihood Change:
                        </span>{" "}
                        {livelihood}
                      </p>
                      <p>
                        <span className="font-bold text-purple-300">
                          Nutritional Status:
                        </span>{" "}
                        {nutrition}
                      </p>
                      <p>
                        <span className="font-bold text-purple-300">
                          Mortality:
                        </span>{" "}
                        {mortality}
                      </p>
                    </div>
                  </FadeCustom>
                )
              )
          }
          {width > 800 ? (
            <MdOutlineKeyboardArrowRight
              className="text-white text-6xl cursor-pointer hover:text-purple-200 duration-200"
              onClick={switchForward}
            />
          ) : null}
          {width < 800 ? (
            <div className="flex flex-row w-full justify-center items-center text-center gap-3">
              <button
                onClick={switchBack}
                className="bg-slate-900 p-6 rounded-lg duration-300 box-border flex-1 items-center justify-center flex flex-row text-center border-[1px] border-solid border-slate-700 hover:bg-slate-800 hover:border-slate-600"
              >
                <MdOutlineKeyboardArrowLeft className="text-white text-3xl cursor-pointer hover:text-purple-200 duration-200" />
              </button>
              <button
                onClick={switchForward}
                className="bg-slate-900 p-6 rounded-lg duration-300 box-border flex-1 items-center justify-center flex flex-row text-center border-[1px] border-solid border-slate-700 hover:bg-slate-800 hover:border-slate-600"
              >
                <MdOutlineKeyboardArrowRight className="text-white text-3xl cursor-pointer hover:text-purple-200 duration-200" />
              </button>
            </div>
          ) : null}
        </div>
      </Fade>
    </div>
  );
};

export default RiskLevels;
