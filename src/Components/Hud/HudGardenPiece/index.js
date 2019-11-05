import React, { useState, useEffect, useContext, useRef } from "react";
import { HudGardenPieceDisplay } from "./HudGardenPieceDisplay";
import { HudContext, GlobalContext } from '../../../Contexts';


export const HudGardenPiece = (props) => {
    const { name, defaultSelected } = props;

    const [border, setBorder] = useState("1px solid white");
    let { hudSelectedButtonsR, setHudSelectedButtonsR } = useContext(HudContext);
    let { state: { hudSelectedPiece }, dispatch } = useContext(GlobalContext);
    let isSelected = useRef(defaultSelected);

    useEffect(() => {
        setHudSelectedButtonsR(state => {
            return [...state, { name, border, setBorder, isSelected }]
        });
        if (defaultSelected) {
            setBorder("10px solid white");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (name === hudSelectedPiece) {
            cleanHud();
            setBorder("10px solid white");
        }
    }, [hudSelectedPiece]);

    const cleanHud = () => {
        hudSelectedButtonsR.forEach(element => {
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
            dispatch({ type: "SET_HUD_SELECTED_PIECE", payload: name });
        }

        isSelected.current = !isSelected.current;
    }

    return <HudGardenPieceDisplay onClick={handleClick} border={border} {...props}></HudGardenPieceDisplay>;
};