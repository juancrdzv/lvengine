import React,{useState} from "react";
import {HudDisplay} from "./HudDisplay"
import { HudContext } from  "../../Contexts"



export const Hud = (props)=>{
    const [hudSelectedButtons,setHudSelectedButtons] = useState([]);
    const [hudSelectedButtonsR,setHudSelectedButtonsR] = useState([]);

    const hudStore = {};
    return(
        <HudContext.Provider value={{hudSelectedButtons,setHudSelectedButtons,hudSelectedButtonsR,setHudSelectedButtonsR}}>
            <HudDisplay {...props}></HudDisplay>
        </HudContext.Provider>
    );
};