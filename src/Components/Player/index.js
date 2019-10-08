import React, { useEffect, useState } from "react";
import { playerEvents } from "./events";
import { PlayerDisplay } from "./PlayerDisplay";

export const Player = props => {
  const { delta, groundBounds } = props;
  const [position, setPosition] = useState({ x: 200, y: 200 });
  const [by, setBy] = useState("0px");

  const [frame, setFrame] = useState();

  useEffect(() => {
    playerEvents(setBy, setPosition, setFrame, delta, groundBounds);
  }, []);

  return (
    <PlayerDisplay frame={frame} position={position} by={by}></PlayerDisplay>
  );
};
