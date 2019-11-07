import React from "react";
import fence from "../../../Assets/fenceVertical.png"
import { Sprite } from "../../Sprite";

export const VerticalFenceDisplay = (props) => {
    return <Sprite
        x={props.x}
        y={props.y}
        spriteImage={fence}
        width={"15px"}
        height={"83px"}
        bSize={"14px"}
        backgroundRepeat={"no-repeat"}
        addBounds={true}></Sprite>
};