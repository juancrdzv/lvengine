import React from "react";
import { GroundDisplay } from "./GroundDisplay";

export const Ground = props => {
  
  return (
    <GroundDisplay
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </GroundDisplay>
  );
};
