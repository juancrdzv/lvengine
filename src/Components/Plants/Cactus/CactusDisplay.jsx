import React from "react";
import cactus from "../../Assets/objects.png" 
import {Sprite} from "../Sprite";

export const CactusDisplay = (props)=>{
    return <Sprite x={props.x} y={props.y} spriteImage={cactus} width={"85px"} height={"85px"} bX={-845} bY={-511} bSize={5899} addBounds={true}></Sprite>
};