import React, { useEffect, useState, useContext, useRef } from "react";
import { playerEvents, setReferences } from "./events";
import { PlayerDisplay } from "./PlayerDisplay";
import { BoundsContext, GlobalContext } from "../../Contexts";

export const Player = props => {
  const { delta, groundBounds } = props;
  const [position, setPosition] = useState({ x: 200, y: 200 });
  const [by, setBy] = useState("0px");

  const [frame, setFrame] = useState();

  let { objectsBounds } = useContext(BoundsContext);
  let { state,dispatch } = useContext(GlobalContext);


  setReferences({ objectsBounds, _position: position,state,dispatch });


  useEffect(() => {
    playerEvents(setBy, setPosition, setFrame, delta, groundBounds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlayerDisplay frame={frame} position={position} by={by}></PlayerDisplay>
  );
};
