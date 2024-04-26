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

  const switchPage = () => {
    setPage(1 - page);
  }

  return (
    <div className="flex flex-col gap-2 my-20 mt-28 box-border h-full text-center items-center justify-center">
      <Fade
        delay={0}
        className="text-5xl text-white font-bold text-purple-300 duration-200"
      >
        Sources
      </Fade>
      <div className="flex flex-row gap-10 justify-center items-center box-border mt-7 p-5">
        <MdOutlineKeyboardArrowLeft className="text-white text-8xl cursor-pointer hover:text-purple-200" onClick={switchPage}/>
        <div className="w-[1000px] flex flex-row gap-10 justify-center items-center box-border mt-7 p-5">
          {sources.slice((page * 3), (page * 3) + 3).map((source: SourceProps, key) => (
            <Source {...source} key={key + (page * 3)} delay={(key) * 80} />
          ))}
        </div>
        <MdOutlineKeyboardArrowRight className="text-white text-8xl cursor-pointer hover:text-purple-200 duration-200" onClick={switchPage} />
      </div>
    </div>
  );
};

export default Sources;
