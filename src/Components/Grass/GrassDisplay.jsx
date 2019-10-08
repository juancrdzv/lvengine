import React from "react";
import backgrounds from "../../Assets/backgrounds.png";
import { Sprite } from "../Sprite";

export const GrassDisplay = props => {
  return (
    <Sprite
      width={"30px"}
      height={"30px"}
      spriteImage={backgrounds}
      bSize={"1325px"}
      bx={"-1px"}
      by={"-1px"}
      x={props.x}
      y={props.y}
    ></Sprite>
  );
};
