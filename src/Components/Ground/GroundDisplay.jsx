import React from "react";
import { Sprite } from "../Sprite";
import { Grass } from "../Grass";

export const GroundDisplay = props => {
  return (
    <Sprite border={"2px solid red"} backgroundColor={"#00801c7a"} {...props}>
      {props.children}
    </Sprite>
  );
};
