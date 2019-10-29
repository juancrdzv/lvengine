import React from "react";
import sunflower from "../../Assets/girasol.png" 
import {Sprite} from "../Sprite";

export const SunflowerDisplay = (props)=>{
    

    return <Sprite x={props.x} y={props.y} spriteImage={sunflower} width={"101px"} height={"82px"}  addBounds={false}></Sprite>
};