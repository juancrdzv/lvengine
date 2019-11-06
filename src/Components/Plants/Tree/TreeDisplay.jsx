import React from "react";
import { Sprite } from "../../Sprite";
import backgrounds from "../../../Assets/backgrounds.png";

export const TreeDisplay = props => {
  return (
    <Sprite
      x={props.x}
      y={props.y}
      width={"120px"}
      height={"150px"}
      spriteImage={backgrounds}
      bX={1224}
      bY={153}
      bSize={1315}
      addBounds={true}
    ></Sprite>
  );
};
