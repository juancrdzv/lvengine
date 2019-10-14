import React from "react";

export const HudDisplay = props => {
    const hudStyle = {
      position:"absolute",
      left:"1028px",
      top:"0px",
      width:"200px",
      height:"768px",
      display:"inline-block",
      background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(20,20,164,1) 35%, rgba(0,212,255,1) 100%)",
      borderRadius: "0px 10px 11px 0px",
      border:"1px solid black",
    };
    return (<div style={hudStyle}>{props.children}</div>);
  };
  