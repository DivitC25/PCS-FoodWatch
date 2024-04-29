"use client";
import Image from 'next/image'

import React, { useEffect, useState } from "react";
import Fade from "./Fade";

const Footer = ({ setIsOnHome }: Props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  const breakpoint = 900;

  return (
    <div
      className={`w-screen flex flex-${
        width > breakpoint ? "row" : "col"
      } justify-center items-center h-full gap-7 box-border px-[7.5%]`}
    >
      <div
        className={`w-${
          width > breakpoint ? "1/2" : "full"
        } flex flex-col items-start justify-start gap-10 h-full`}
      >

      <div className="flex flex row gap-20 justify-center items-center p-[3%] align-middle w-screen">
          <a href="https://pcs.studentorg.berkeley.edu" target="_blank" className="mr-[37%]">
           <div className="box-border border-purple-300/[.8] h-15 w-100 p-4 border-4">
            <Fade className="text-xl text-purple-300/[.8] font-bold" delay={200}>
              PCS @ BERKELEY
            </Fade>
            </div>
          </a>
          <Fade className="flex flex-row" >  
            <div className="h-[160px] bg-purple-300/[.7] w-[1px] mx-20"/>
            <div className="flex-col text-base text-purple-300/[.7] leading-10 font-semibold w-1/12" delay={200}>
              <button>
                <a href="#top">
                  HOME
                </a> 
              </button>
              <button>
                <a onClick={() => { setIsOnHome(false);}}>
                  MAP 
                </a>
              </button>
              <button>
                <a href="#about">
                  ABOUT
                </a> 
              </button> 
              <button>
                <a href="#risk">
                  RISK
                </a> 
              </button> 
            </div>
            <div className="h-[160px] bg-purple-300/[.7] w-[1px] mx-20"/>
            <div className="flex-col row gap-20" >
              <a href="https://www.instagram.com/pcs_berkeley/" target="_blank">
                <Image src="/insta.svg" alt="Instagram" width={35} height={35} className="mb-2 opacity-70" /> 
              </a>
              <a href="https://www.linkedin.com/company/political-computer-science/" target="_blank">
              <Image src="/linkedin.svg" alt="Linkedin" width={35} height={35} className="mb-2 opacity-70"/> 
              </a>
              <a href="https://github.com/PoliticalComputerScience" target="_blank">
              <Image src="/git.svg" alt="Github" width={35} height={35} className="mb-2 opacity-70"/> 
              </a>
              <a href="https://medium.com/@pcsberkeley" target="_blank">
              <Image src="/medium.svg" alt="Medium" width={35} height={35} className="opacity-70"/> 
              </a>
            </div>
          </Fade>
        </div> 
      </div>

      <Fade
        className={`h-full w-${width > breakpoint ? "1/3" : "full"}`}
        delay={300}
      />
    </div>
  );
};

export default Footer;

