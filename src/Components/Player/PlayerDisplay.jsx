import React from "react";
import characters from "./characters.png";

export const PlayerDisplay = props => {
  const { position, by, frame } = props;

  let playerStyle = {
    position: "absolute",
    display: "inline-block",
    top: position.y,
    left: position.x,
    backgroundImage: `url(${characters})`,
    backgroundSize: "580px",
    width: "48px",
    height: "48px",
    backgroundPositionY: by,
    backgroundPositionX: frame
  };

  return <div style={playerStyle}></div>;
};
