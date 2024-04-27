"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  currSection: string;
  setCurrSection: Dispatch<SetStateAction<string>>;
  sectionOptions: string[];
}

const SectionSwitcher = ({
  currSection,
  setCurrSection,
  sectionOptions,
}: Props) => {
  const getUnderline = (option: string) => {
    if (option == currSection) {
      return `${width > 900 ? "border-b-4" : "border-t-4"} border-purple-300`;
    } else {
      return `${
        width > 900 ? "border-b-[1px]" : "border-t-[1px]"
      } border-purple-100`;
    }
  };

  const getText = (option: string) => {
    if (option == currSection) {
      return "text-purple-300";
    } else {
      return "text-purple-100";
    }
  };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-full flex flex-row items-center justify-center mb-16">
      {sectionOptions.map((option, key) => (
        <div
          key={key}
          onClick={() => {
            setCurrSection(option);
          }}
          className={`py-5 ${
            width < 800 ? "px-8" : "px-12"
          } border-solid cursor-pointer box-border ${getUnderline(option)}`}
        >
          <p className={`p font-bold ${getText(option)}`}>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionSwitcher;
