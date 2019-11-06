import React from "react";
import { Sprite } from "../../Sprite";
import backgrounds from "../../../Assets/backgrounds.png";


export const VerticalGardenerDisplay = (props) => {
    return (<Sprite
        width={"33px"}
        height={"62px"}
        bSize={1378}
        bX={-537}
        bY={-625}
        x={props.x}
        y={props.y}
        spriteImage={backgrounds}
        addBounds={true}></Sprite>)
}

