import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface NavlinkProps {
  children: string;
  icon: IconProp;
}

const Navlink: React.FC<NavlinkProps> = ({children, icon}) => {
  return (
    <div className = 'navlink cursor-pointer'> 
      <FontAwesomeIcon icon={icon} className = "icon" /> 
      <span className = "textNav">{children}</span>
    </div>
  )
}

export default Navlink