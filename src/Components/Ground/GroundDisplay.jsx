import React from "react";
import { Sprite } from "../Sprite";
import { Grass } from "../Grass";

export const GroundDisplay = props => {
  return (
    <Sprite border={"2px solid red"} backgroundColor={"#459345"} {...props}>
      {props.children}
    </Sprite>
  );
};
