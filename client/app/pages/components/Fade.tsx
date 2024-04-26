'use client';

import React, { useEffect, useState } from 'react';

interface Props {
    delay: number;
    className: string;
    children: React.ReactNode;
}

const Fade = ({delay, className, children}: Props) => {

    const [opacity, setOpacity] = useState(0);
    const [transform, setTransform] = useState("translate(0, 1rem)")

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpacity(1);
            setTransform("translate(0, 0)")
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [])
  return (
    <div className={className} style={{transition: "0.7s", opacity: opacity, transform: transform}}>
        {children}
    </div>
  )
}

export default Fade