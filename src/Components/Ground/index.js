import React from "react";
import { GroundDisplay } from "./GroundDisplay";
import { Grass } from "../Grass";

export const Ground = props => {
  let grass = [];
  let x = 100,
    y = 100;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      grass.push(<Grass x={x} y={y} key={`grass${i}${j}`}></Grass>);
      x += 30;
    }
    x = 100;
    y += 30;
  }
  return (
    <GroundDisplay
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
    >
      {grass}
      {props.children}
    </GroundDisplay>
  );
};
