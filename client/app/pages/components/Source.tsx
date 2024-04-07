import React from 'react'

interface SourceProps {
    children: string,
    title: string,
    img: string
}

const Source = ({children, title, img}: SourceProps) => {
  return (
    <div className="w-full text-white flex flex-row gap-4 hover:bg-gray p-6 cursor-pointer rounded-lg duration-300 box-border">
        <img src={img} className="w-52 object-cover rounded-lg"/>
        <div className="flex flex-col justify-center items-start gap-3 p-2">
            <h2 className="text-2xl">{title}</h2>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default Source