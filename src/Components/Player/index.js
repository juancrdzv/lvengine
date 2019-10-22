import React, { useEffect, useState, useContext, useRef } from "react";
import { playerEvents, setBoundsReference,setPositionReference,setHudItem } from "./events";
import { PlayerDisplay } from "./PlayerDisplay";
import { BoundsContext,GlobalContext } from "../../Contexts";

export const Player = props => {
  const { delta, groundBounds } = props;
  const [position, setPosition] = useState({ x: 200, y: 200 });
  const [by, setBy] = useState("0px");

  const [frame, setFrame] = useState();

  let boundsContext = useContext(BoundsContext);
  let globalContext = useContext(GlobalContext);
  
  
  setBoundsReference(boundsContext.objectsBounds);
  setPositionReference(position);
  setHudItem(globalContext.hudSelectedItem);
  
  useEffect(() => {
    playerEvents(setBy, setPosition, setFrame, delta, groundBounds,globalContext.setPlants);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlayerDisplay frame={frame} position={position} by={by}></PlayerDisplay>
  );
};
