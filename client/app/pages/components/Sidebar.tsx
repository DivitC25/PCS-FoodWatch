"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Navlink from "./Navlink";
import {
  faPlantWilt,
  faCar,
  faEarthAmericas,
  faBug,
  faMoneyBill,
  faBox,
  faCloudRain,
  faTrash,
  faBowlFood,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavlinkProps {
  text: string;
  icon: IconProp;
}

interface Props {
  setIsOnHome: Dispatch<SetStateAction<boolean>>;
  setMapType: Dispatch<SetStateAction<string>>;
  mapType: string;
}

const homeIcon: NavlinkProps = {
  text: "Home",
  icon: faHouse,
};

const searchIcon: NavlinkProps = {
  text: "Search...",
  icon: faMagnifyingGlass,
};

const icons: NavlinkProps[] = [
  {
    text: "Food Security",
    icon: faBowlFood,
  },
  {
    text: "Vegetation",
    icon: faPlantWilt,
  },
  {
    text: "Transportation Networks",
    icon: faCar,
  },
  {
    text: "Pests",
    icon: faBug,
  },
  {
    text: "Purchasing Power",
    icon: faMoneyBill,
  },
  {
    text: "Food Storage Capacity",
    icon: faBox,
  },
  {
    text: "Conflict/Disasters",
    icon: faCloudRain,
  },
  {
    text: "Food Wastage",
    icon: faTrash,
  },
];

const Sidebar = ({ setIsOnHome, setMapType, mapType }: Props) => {
  const handleMapChange = (newProps: string) => {
    setMapType(newProps);
  };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={`bg-zinc-900 w-full rounded-xl box-border flex flex-col ${width < 800 ? "py-4" : "py-5"}`}>
      <div className={`flex flex-row items-center px-5 ${width < 800 ? "pb-5" : "pb-6"}`}>
        <img className={`${width < 800 ? "h-7" : "h-10"} rounded-md`} src="/logo.png" alt="purple box" />
        {width >= 800 ? (
          <div className="flex flex-col justify-center text-left pl-2">
            <h2 className="text-xl text-white font-bold">FoodWatch</h2>
            <p className="text-sm text-white">Interactive Map</p>
          </div>
        ) : null}
      </div>
      <div className={`w-full flex flex-col justify-center items-left px-5 ${width < 800 ? "gap-2" : "gap-2"}`}>
        <div className={`w-full flex flex-row justify-center items-center ${width < 800 ? "" : "gap-1"}`}>
          <FontAwesomeIcon
            icon={searchIcon.icon}
            className={`${width >= 800 ? "text-xl" : "text-lg"} text-white ${width < 800 ? "p-3" : "p-4"} bg-zinc-700 rounded-md`}
          />
          {width >= 800 ? (
            <input
              type="text"
              placeholder={"Search..."}
              style={{ outline: "none", color: "white" }}
              className={`w-full h-full rounded-md flex flex-row items-center justify-left gap-4 p-3 bg-zinc-700 duration-300`}
            ></input>
          ) : null}
        </div>
        {icons.map(({ text, icon }, key) => (
          // eslint-disable-next-line react/jsx-key
          <div
            onClick={() => {
              handleMapChange(text);
            }}
          >
            <Navlink icon={icon} current={text == mapType}>
              {text}
            </Navlink>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-left justify-between items-start mx-5">
        <div className={`w-full h-[1px] bg-zinc-700 ${width < 800 ? "my-3" : "my-3"}`}></div>
        <div
          onClick={() => {
            setIsOnHome(true);
          }}
          className={`cursor-pointer w-full rounded-md flex flex-row items-center ${
            width < 800 ? "aspect-square justify-center" : "justify-left"
          } gap-4 p-3 hover:bg-zinc-700 duration-300`}
        >
          <FontAwesomeIcon
            icon={homeIcon.icon}
            className={`${width >= 800 ? "text-xl" : "text-lg"} text-white`}
          />
          {width >= 800 ? (
            <span className="text-white text-md">{homeIcon.text}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
