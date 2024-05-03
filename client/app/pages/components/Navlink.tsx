import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface NavlinkProps {
  children: string;
  icon: IconProp;
  current: boolean;
}

const Navlink: React.FC<NavlinkProps> = ({children, icon, current}) => {

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={`cursor-pointer w-full rounded-md flex flex-row items-center ${width < 800 ? "justify-center" : "justify-left"} gap-4 p-3 ${current ? 'bg-zinc-700' : ""} hover:bg-zinc-700 duration-300`}> 
      <FontAwesomeIcon icon={icon} className={`${width >= 800 ? "text-xl" : "text-lg"} text-white`}/> 
      { width > 800 ? <span className="text-white text-md">{children}</span> : null }
    </div>
  )
}

export default Navlink