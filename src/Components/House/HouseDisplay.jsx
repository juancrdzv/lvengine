import React from "react";
import backgrounds from "../../Assets/backgrounds.png";
import { Sprite } from "../Sprite";

export const HouseDisplay = props => {
  return (
    <Sprite
      width={"262px"}
      height={"264px"}
      spriteImage={backgrounds}
      bSize={"1940px"}
      bX={"-944px"}
      bY={"-512px"}
      x={764}
      y={-2}
      addBounds={true}
    ></Sprite>
  );
};
