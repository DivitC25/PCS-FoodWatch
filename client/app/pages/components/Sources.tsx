"use client";

import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import sources from "./sources.json";
import Source from "./Source";
import Fade from "./Fade";

interface SourceProps {
  children: string;
  title: string;
  link: string;
  img: string;
}

const Sources = () => {
  const [page, setPage] = useState(0);

  const [width, setWidth] = useState(0);

  const [numItems, setNumItems] = useState(
    window.innerWidth > 1200 ? 3 : window.innerWidth > 800 ? 2 : 1
  );

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      if (width > 1200) {
        setNumItems(3);
      } else if (width > 800) {
        setNumItems(2);
      } else {
        setNumItems(1);
      }
    });
  }, [width]);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  const switchForward = () => {
    setPage(page + 1);
  };

  const switchBack = () => {
    if (page == 0) {
      setPage(6 / numItems - 1);
    } else {
      setPage(page - 1);
    }
  };

  let actualPage = page % (6 / numItems);

  return (
    <div className="flex flex-col gap-2 mb-20 box-border h-full text-center items-center justify-center">
      <Fade
        delay={0}
        className="text-5xl text-white font-bold text-purple-300 duration-200"
      >
        Sources
      </Fade>
      <div
        className={`flex flex-${width < 800 ? "col" : "row"} gap-${
          width < 800 ? "3" : "10"
        } justify-center items-center box-border mt-7 p-5`}
      >
        {width > 800 ? (
          <MdOutlineKeyboardArrowLeft
            className="text-white text-8xl cursor-pointer hover:text-purple-200"
            onClick={switchBack}
          />
        ) : null}
        <div className="flex flex-row gap-10 justify-center items-center box-border mt-7">
          {sources
            .slice(actualPage * numItems, actualPage * numItems + numItems)
            .map((source: SourceProps, key) => (
              <Source
                {...source}
                key={key + actualPage * numItems}
                delay={key * 80}
              />
            ))}
        </div>
        {width > 800 ? (
          <MdOutlineKeyboardArrowRight
            className="text-white text-8xl cursor-pointer hover:text-purple-200 duration-200"
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
    </div>
  );
};

export default Sources;
