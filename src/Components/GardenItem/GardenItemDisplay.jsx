import React from "react";
import { Bounds } from "../../Utils";
import { Sunflower } from "../Sunflower";
import { Mushromm } from "../Mushromm";
import { Purple } from "../Purple";
import { Weird } from "../Weird";

export const GardenItemDisplay = props => {
    const { position } = props;
    const { x, y } = position;
    

    const gardenItemStyle = {
        position: "absolute",
        left: x,
        top: y,
    };
    
    return <div style={gardenItemStyle}>ALGO</div>;
};
