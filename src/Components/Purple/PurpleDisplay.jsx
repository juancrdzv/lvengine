import React from "react";
import purple from "../../Assets/morado.png" 
import {Sprite} from "../Sprite";

export const PurpleDisplay = (props)=>{
    return <Sprite x={props.x} y={props.y} spriteImage={purple} width={"69px"} height={"45px"} bX={"-17px"} bY={"-28px"}  addBounds={false}></Sprite>
};