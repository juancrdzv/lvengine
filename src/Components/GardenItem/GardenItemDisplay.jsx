import React from "react";

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
