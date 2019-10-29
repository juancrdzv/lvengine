import React from "react";


export const HudGardenPieceDisplay = (props)=>{
    const hudStyle={
        border: props.border,
        width: "150px",
        height: "150px",
        margin: "25px",
        backgroundImage: `url(${props.background}`,
        backgroundSize: "contain",
    }
    return <div onClick={props.onClick} style={hudStyle}></div>
};