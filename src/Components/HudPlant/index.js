import React from "react";
import {HudPlantDisplay} from "./HudPlantDisplay";

export const HudPlant = (props)=>{
    const handleClick=(event)=>{
        console.log("entre")
    }
    return <HudPlantDisplay onClick={handleClick} {...props}></HudPlantDisplay>;
};