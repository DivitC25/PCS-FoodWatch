"use client";

import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

interface Props {
  setIsOnHome: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setIsOnHome }: Props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-screen h-full bg-darkpurple flex flex-row justify-between items-center text-white box-border relative z-10">
      <div className="flex flex-row gap-10 h-full justify-start items-center ml-6">
        <img src="/logo.png" alt="LOGO" className="h-12"></img>
        {width > 750 ? (
          <h1 className="text-2xl font-bold">PCS FOODWATCH</h1>
        ) : null}
      </div>
      <div
        className={`flex flex-row gap-${
          width > 750 ? "24" : "10"
        } h-full justify-start items-center mr-${
          width > 750 ? "24" : "10"
        } text-xl tracking-wider`}
      >
        <div className="cursor-pointer border-b-8 border-white h-full flex flex-col justify-center items-center text-center py-8">
          <a>HOME</a>
        </div>
        <div className="cursor-pointer border-b-8 border-darkpurple h-full flex flex-col justify-center items-center text-center py-8 hover:border-white duration-300">
          <a
            onClick={() => {
              setIsOnHome(false);
            }}
          >
            MAP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
