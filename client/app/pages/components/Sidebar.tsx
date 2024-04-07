import React from "react";
import Navlink from "./Navlink";
import { faPlantWilt, faCar, faEarthAmericas, faBug, faMoneyBill, faBox, faCloudRain, faTrash} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="h-3/4 bg-slate-800 w-full rounded-xl box-border">
      <h2 className = "title"> <img className = "icon" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJbJYVRfnEO5gy8Si46fgNc9Aruyj7MQ9C3GOYHTFkQ&s"></img>Food Scarcity Interactive Map</h2>
      <Navlink text = "Vegetation" icon = {faPlantWilt}/>
      <Navlink text = "Transportation Networks" icon = {faCar}/>
      <Navlink text = "Climate Suitability" icon = {faEarthAmericas}/>
      <Navlink text = "Pests" icon = {faBug}/>
      <Navlink text = "Purchasing Power" icon = {faMoneyBill}/>
      <Navlink text = "Food Storage Capacity" icon = {faBox}/>
      <Navlink text = "Conflict/Disasters" icon = {faCloudRain}/>
      <Navlink text = "Food Wastage" icon = {faTrash}/>
    </div>
  );
};

export default Sidebar;
