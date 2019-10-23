import React from "react";
import weird from "../../Assets/raro.png" 
import {Sprite} from "../Sprite";

export const WeirdDisplay = (props)=>{
    return <Sprite x={props.x} y={props.y} spriteImage={weird} width={"61px"} height={"40px"} bX={"-23px"} bY={"-30px"}  addBounds={false}></Sprite>
};