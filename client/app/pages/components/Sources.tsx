import React from 'react';
import sources from "./sources.json";
import Source from './Source';

interface SourceProps {
    children: string,
    title: string,
    img: string
}

const Sources = () => {
  return (
    <div className="w-screen flex flex-col gap-2 mt-10 box-border">
        <h1 className="text-4xl text-white pl-[2.5%]">Sources</h1>
        <div className="w-screen h-0.5 flex flex-row justify-center items-center">
            <div className="bg-white w-[95%] h-0.5"></div>
        </div>
        <div className="flex flex-col gap-2 justify-center align-center mx-[2.5%] box-border mt-7">
            {sources.map((source: SourceProps, key) => (
                <Source {...source} key={key}/>
            ))}
        </div>
    </div>
  )
}

export default Sources