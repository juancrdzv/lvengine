import React, { useState, useEffect, useContext, useRef } from "react";
import { HudGardenPieceDisplay } from "./HudGardenPieceDisplay";
import { HudContext, GlobalContext } from '../../Contexts';


export const HudGardenPiece = (props) => {
    const { name, defaultSelected } = props;

    const [border, setBorder] = useState("1px solid white");
    let boundsContext = useContext(HudContext);
    let globalContext = useContext(GlobalContext);
    let isSelected = useRef(defaultSelected);

    useEffect(() => {
        boundsContext.setHudSelectedButtonsR(state => {
            return [...state, { name, border, setBorder, isSelected }]
        });
        if (defaultSelected) {
            setBorder("10px solid white");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (name === globalContext.hudSelectedPiece) {
            cleanHud();
            setBorder("10px solid white");
        }
    }, [globalContext.hudSelectedPiece]);

    const cleanHud = () => {
        boundsContext.hudSelectedButtonsR.forEach(element => {
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
            globalContext.setHudSelectedPiece(name);
        }

        isSelected.current = !isSelected.current;
    }

    return <HudGardenPieceDisplay onClick={handleClick} border={border} {...props}></HudGardenPieceDisplay>;
};