"use client";

import React, { Dispatch, SetStateAction } from "react";
import Image from 'next/image'
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
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface NavlinkProps {
  text: string;
  icon: IconProp;
}

interface Props {
  setIsOnHome: Dispatch<SetStateAction<boolean>>;
  mapType: Dispatch<SetStateAction<string>>;
}

const icons: NavlinkProps[] = [
  {
    text: "Vegetation",
    icon: faPlantWilt,
  },
  {
    text: "Transportation Networks",
    icon: faCar,
  },
  {
    text: "Climate Suitability",
    icon: faEarthAmericas,
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

const handleMapChange = (newProps) => {
  handleMapPropsChange(newProps);
};

const Sidebar = ({ setIsOnHome, mapType }: Props) => {
  return (
    <div className="h-[70%] bg-gray w-full rounded-xl box-border flex flex-col">
      <h2 className="title ml-5">
        {" "}
        <Image
          className="icon"
          src="/logo.png"
          width={100}
          height={100}
          alt="purple box"
        />
        Food Scarcity Interactive Map
      </h2>
      {/* search doesn't work... but it looks ok lol */}
      <form class="max-w-md mx-auto text-gray-900">   
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" 
              class="block w-full p-2 ps-10 text-sm text-gray-200 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search Region, Country, State.." required />
            <button type="submit" class="text-white absolute end-1 bottom-1 bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
      </form>
      {icons.map(({ text, icon }, key) => (
        // eslint-disable-next-line react/jsx-key
        <Navlink icon={icon} key={handleMapChange(text)}/>
      ))}
      <button
        className="padding-4 cursor-pointer text-white rounded-md margin-5"
        onClick={() => {
          setIsOnHome(true);
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Sidebar;
