import React,{useState,useEffect,useContext,useRef} from "react";
import {HudPlantDisplay} from "./HudPlantDisplay";
import {HudContext} from '../../Contexts';


export const HudPlant = (props)=>{
    const {name} = props;

    const [border,setBorder] = useState("1px solid white");
    let boundsContext = useContext(HudContext);
    let isSelected = useRef(false);

    useEffect(()=>{
        boundsContext.setHudSelectedButtons(state=>{
            return [...state,{name,border,setBorder,isSelected}]
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleClick=(event)=>{
        boundsContext.hudSelectedButtons.forEach(element => {
           if(element.name!== name){
               element.setBorder("1px solid white");
               element.isSelected.current = false;
           } 
        });

        if(isSelected.current){
            setBorder("1px solid white");
        }else{
            setBorder("10px solid white");
        }

        isSelected.current = !isSelected.current;    
    }
    
    return <HudPlantDisplay onClick={handleClick} border={border} {...props}></HudPlantDisplay>;
};