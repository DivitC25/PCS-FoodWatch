import React from 'react'
import Fade from './Fade'

interface SourceProps {
    children: string,
    link: string,
    title: string,
    img: string,
    delay: number
}

const Source = ({children, title, link, img, delay = 0}: SourceProps) => {
  return (
    <Fade className="self-stretch text-white flex flex-col gap-4 bg-gray p-6 cursor-pointer rounded-lg duration-300 box-border flex-1 text-left aspect-[13/16]" delay={delay}>
      <a href={link} target="_blank">
        <img src={img} className="w-10 object-cover rounded-lg aspect-square mb-5"/>
        <div className="flex flex-col justify-center items-start gap-3 p-2">
            <h2 className="text-lg text-violet-300 font-bold">{title}</h2>
            <p className='text-white text-md leading-loose'>{children}</p>
        </div>
      </a>
    </Fade>
  )
}

export default Source