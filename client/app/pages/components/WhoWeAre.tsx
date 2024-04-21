import React from 'react';
import members from "./members.json";

interface Member {
    member: string;
}

const WhoWeAre = () => {
  return (
    <div className="w-screen flex flex-col gap-2 my-10 box-border">
        <h1 className="text-4xl text-white pl-[2.5%]">Who We Are</h1>
        <div className="w-screen h-0.5 flex flex-row justify-center items-center">
            <div className="bg-white w-[95%] h-0.5"></div>
        </div>
        <div className="w-screen px-[4%] flex flex-col justify-center items-center my-10">
            <p className="text-white">Political Computer Science @ Berkeley is a club dedicated to exploring interdisciplinary work connecting the technology and political fields. Don&apos;t be fooled, we have plenty of individuals with a strong tech background and host several web development/data science project each semester, but we also have room for individuals to explore non-technical projects relating to tech policy, and even code tools to help inform others about government.</p>
        </div>
        <div className="flex flex-row px-[4%] gap-5">
            {members.map((member: Member, key) => (
                <img src={member.member} key={key} className="object-cover h-28 aspect-square rounded-md"/>
            ))}
        </div>
    </div>
  )
}

export default WhoWeAre