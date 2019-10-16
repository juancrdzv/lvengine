import React,{useState} from "react";
import {HudDisplay} from "./HudDisplay"
import { HudContext } from  "../../Contexts"



export const Hud = (props)=>{
    const [hudSelectedButtons,setHudSelectedButtons] = useState([]);
    return(
        <HudContext.Provider value={{hudSelectedButtons,setHudSelectedButtons}}>
            <HudDisplay {...props}></HudDisplay>
        </HudContext.Provider>
    );
};