import React from "react";
import { HudPlant } from "../HudPlant";
import girasol from "../../Assets/girasol.png";
import hongos from "../../Assets/hongos.png";
import morado from "../../Assets/morado.png";
import raro from "../../Assets/raro.png";

export const HudDisplay = props => {
    const hudStyle = {
      position:"absolute",
      left:"1028px",
      top:"0px",
      width:"448px",
      height:"768px",
      display:"inline-block",
      background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(20,20,164,1) 35%, rgba(0,212,255,1) 100%)",
      borderRadius: "0px 10px 11px 0px",
      border:"1px solid black",
    };

    const leftStyle = {
      display:"inline-block",
    };

    const rightStyle = {
      display: "inline-block",
      border: "1px solid red",
      width: "202px",
      height: "768px",
      position: "absolute",
      left: "220px",
    };
    return (<div style={hudStyle}>
              <div style={leftStyle}>
                <HudPlant name={'sunflower'} background={girasol} defaultSelected={true}></HudPlant>
                <HudPlant name={'mushrooms'} background={hongos} defaultSelected={false}></HudPlant>
                <HudPlant name={'purple'} background={morado} defaultSelected={false}></HudPlant>
                <HudPlant name={'weird'} background={raro} defaultSelected={false}></HudPlant>
              </div>
              <div style={rightStyle}>
                <HudPlant name={'sunflower'} background={girasol} defaultSelected={false}></HudPlant>               
              </div>
            </div>);
  };
  