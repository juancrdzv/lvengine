import React, { useState, useEffect, useContext, useRef } from "react";
import { HudPlantDisplay } from "./HudPlantDisplay";
import { HudContext, GlobalContext } from '../../../Contexts';


export const HudPlant = (props) => {
    const { name, defaultSelected } = props;

    const [border, setBorder] = useState("1px solid white");
    let boundsContext = useContext(HudContext);
    let globalContext = useContext(GlobalContext);
    let isSelected = useRef(defaultSelected);
    let {state,dispatch } = globalContext;
    
    useEffect(() => {
        boundsContext.setHudSelectedButtons(state => {
            return [...state, { name, border, setBorder, isSelected }]
        });
        if (defaultSelected) {
            setBorder("10px solid white");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (name === state.hudSelectedPlant) {
            cleanHud();
            setBorder("10px solid white");
        }
    }, [state.hudSelectedPlant]);

    const cleanHud = () => {
        boundsContext.hudSelectedButtons.forEach(element => {
            if (element.name !== name) {
                element.setBorder("1px solid white");
                element.isSelected.current = false;
            }
        });
    };

    const handleClick = (event) => {
        cleanHud();

        if (isSelected.current) {
            setBorder("1px solid white");
        } else {
            setBorder("10px solid white");
            dispatch({ type:'SET_HUD_SELECTED_PLANT',payload: name });
        }

        isSelected.current = !isSelected.current;
    }

    return <HudPlantDisplay onClick={handleClick} border={border} {...props}></HudPlantDisplay>;
};