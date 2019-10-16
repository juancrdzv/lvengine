import React, { useState,useEffect, useRef } from "react";
import { BoundsContext } from "./Contexts"
import { World } from "./Worlds";
import { Player,Hud } from "./Components";
import "./App.css";



function App() {
  let delta = useRef(0);
  let lastFrameTimeMs = 0;
  let [objectsBounds,setObjectsBounds] = useState([]);
  let [selectedHudItem,setSelectedHudItem] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mainLoop = timestamp => {
    delta.current = timestamp - lastFrameTimeMs; // get the delta time since last frame
    lastFrameTimeMs = timestamp;
    requestAnimationFrame(mainLoop);
  };

  useEffect(() => {
    requestAnimationFrame(mainLoop);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BoundsContext.Provider value={{objectsBounds,setObjectsBounds}}>
      <Hud></Hud>
      <World></World>
      <Player
        groundBounds={{ x: 0, y: 0, width: 1024, height: 768 }}
        delta={delta}
      ></Player>
    </BoundsContext.Provider>
  );
}

export default App;
