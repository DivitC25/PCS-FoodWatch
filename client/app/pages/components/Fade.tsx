import React, { useEffect, useState, useRef } from 'react';

interface Props {
    delay: number;
    className: string;
    children: React.ReactNode;
    onScroll?: boolean;
    style?: any
}

const Fade = ({ delay, className, children, onScroll = false, style={} }: Props) => {
    const [opacity, setOpacity] = useState(0);
    const [transform, setTransform] = useState("translate(0, 1rem)");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { top } = ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (top <= windowHeight) {
                    setOpacity(1);
                    setTransform("translate(0, 0)");
                }
            }
        };

        let timeoutId: string | number | NodeJS.Timeout | undefined;

        const handleScrollEvent = () => {
            if (onScroll) {
                window.addEventListener('scroll', handleScroll);
            } else {
                timeoutId = setTimeout(() => {
                    setOpacity(1);
                    setTransform("translate(0, 0)");
                }, delay);
            }
        };


        handleScrollEvent();

        return () => {
            clearTimeout(timeoutId);
            if (onScroll) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [delay, onScroll]);

    return (
        <div ref={ref} className={className} style={{ transition: "0.7s", opacity: opacity, transform: transform, ...style }}>
            {children}
        </div>
    );
};

export default Fade;
