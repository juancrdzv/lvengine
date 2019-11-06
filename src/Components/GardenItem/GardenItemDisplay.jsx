import React from "react";
import fh from "../../Assets/fenceHorizontal.png";
import fv from "../../Assets/fenceVertical.png";
import gv from "../../Assets/gardenVertical.png";
import gh from "../../Assets/gardenHorizontal.png";

export const GardenItemDisplay = props => {
    const { position } = props;
    const { x, y } = position;
    let item = null;
    
    switch(props.selectedIPiece){
        case "fenceH":
            item = fh;
        break;
        case "fenceV":
            item = fv;
        break;
        case "gardenH":
            item = gh;
        break;
        case "gardenV":
            item = gv;
        break;
    }

    const gardenItemStyle = {
        position: "absolute",
        left: x,
        top: y,
        backgroundImage: `url(${item})`,
        width: '50px',
        height: '50px',
        backgroundRepeat: "no-repeat", 
    };

    return <div style={gardenItemStyle}></div>;
};
