import React from "react";
import characters from "../../Assets/characters.png";
import { Sprite } from "../Sprite"

export const PlayerDisplay = props => {
  const { position, by, frame } = props;

  return <Sprite bSize={"580px"} y={position.y} x={position.x} spriteImage={characters} bY={by} bX={frame} width={48} height={48} zIndex={10}></Sprite>;
};
