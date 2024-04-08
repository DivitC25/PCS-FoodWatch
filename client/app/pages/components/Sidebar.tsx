import React from "react";
import Navlink from "./Navlink";
import { faPlantWilt, faCar, faEarthAmericas, faBug, faMoneyBill, faBox, faCloudRain, faTrash} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface NavlinkProps {
  text: string;
  icon: IconProp;
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
    text: "Food Storare Capacity",
    icon: faBox,
  },
  {
    text: "Conflict/Disasters",
    icon: faCloudRain,
  },
  {
    text: "Food Wastage",
    icon: faTrash,
  }
];

const Sidebar = () => {
  return (
    <div className="h-3/4 bg-gray w-full rounded-xl box-border flex flex-col">
      <h2 className = "title"> <img className = "icon" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJbJYVRfnEO5gy8Si46fgNc9Aruyj7MQ9C3GOYHTFkQ&s"></img>Food Scarcity Interactive Map</h2>
      {icons.map(({text, icon}, key) => (
        // eslint-disable-next-line react/jsx-key
        <Navlink icon={icon}>{text}</Navlink>
      ))}
    </div>
  );
};

export default Sidebar;
