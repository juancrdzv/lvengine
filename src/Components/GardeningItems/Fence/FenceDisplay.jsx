import React from "react";
import fence from "../../../Assets/objects.png"
import { Sprite } from "../../Sprite";

export const FenceDisplay = (props) => {
    return <Sprite
        x={props.x}
        y={props.y}
        spriteImage={fence}
        width={"84px"}
        height={"41px"}
        bX={-3245}
        bY={-2741}
        bSize={5899} addBounds={true}></Sprite>
};