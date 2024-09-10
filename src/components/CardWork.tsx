import { useEffect, useState } from "react";
import gsap from "gsap";

interface CardWorkProps {
    imageWork : Array<string>,
    titleWork : string,
    descWork:string
}

const CardWork = (props : CardWorkProps) => {
    useEffect(() => {
        gsap.to(".imageWork", { scale: 0.85, duration: 0.1, ease: "out" });
    }, []);

    const handleMouseEnter = () => {
        gsap.to(".imageWork", { scale: 0.9, duration: 0.2 , ease: "back.inOut" });
    };

    const handleMouseLeave = () => {
        gsap.to(".imageWork", { scale: 0.85, duration: 0.3, ease: "out" });
    };

    return (
        <div className="col-span-1 cardWork ">
            <div className="bgWork" style={{ backgroundImage: `url(${props.imageWork[0]})` }}>
                <img 
                    src={props.imageWork[1]} 
                    alt={props.titleWork} 
                    className="imageWork"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />  
            </div>
            
            <div className="descWork">{props.descWork}</div>
            <div className="titleWork">{props.titleWork}</div>
        </div>
    )
}

export default CardWork