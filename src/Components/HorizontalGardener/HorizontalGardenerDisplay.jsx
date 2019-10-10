import React from "react";
import backgrounds from "../../Assets/backgrounds.png";
import { Sprite } from "../Sprite";

export const HorizontalGardenerDisplay = (props)=>{
    return (<Sprite width={"94px"} 
                    height={"47px"} 
                    bSize={1378}
                    bX={-537}
                    bY={-571} 
                    x={props.x}
                    y={props.y}
                    spriteImage={backgrounds}
                    addBounds={true}>                   
            </Sprite>);
};
