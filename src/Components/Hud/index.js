import React from "react";
import {HudDisplay} from "./HudDisplay"

export const Hud = (props)=>{
    return(<HudDisplay {...props}>{props.children}</HudDisplay>);
};