import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface NavlinkProps {
  text: string;
  icon: IconProp;
}

const Navlink: React.FC<NavlinkProps> = ({text, icon}) => {
  return (
    <div className = 'navlink'> 
      <FontAwesomeIcon icon={icon} className = "icon" /> 
      <span className = "textNav">{text}</span>
    </div>
  )
}

export default Navlink