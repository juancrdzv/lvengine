import React from "react";
import mushromm from "../../Assets/hongos.png" 
import {Sprite} from "../Sprite";

export const MushrommDisplay = (props)=>{
    return <Sprite x={props.x} y={props.y} spriteImage={mushromm} width={"30px"} height={"32px"}  addBounds={false} bX={"-38px"} bY={"-34px"}></Sprite>
};