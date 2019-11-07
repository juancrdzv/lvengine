import React, { useState, useEffect, useRef, useReducer } from "react";
import { BoundsContext, GlobalContext } from "./Contexts"
import { World } from "./Worlds";
import { Player, Hud, GardenItem } from "./Components";
import { globalReducer } from "./Reducers";
import { gloabalStore } from "./Stores";
import "./App.css";



function App() {
  let delta = useRef(0);
  let lastFrameTimeMs = 0;
  const [objectsBounds, setObjectsBounds] = useState([]);
 
  const [state, dispatch] = useReducer(globalReducer,gloabalStore);

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

  let store = { state, dispatch };

  return (
    <GlobalContext.Provider value={store}>
      <BoundsContext.Provider value={{ objectsBounds, setObjectsBounds }}>
        <Hud></Hud>
        <World></World>
        <Player
          groundBounds={{ x: 0, y: 0, width: 1024, height: 768 }}
          delta={delta}
        ></Player>
        {state.plants}
        {state.pieces}
        {state.showGardenItem && <GardenItem position={state.gardenItemPosition} selectedIPiece={state.hudSelectedPiece}></GardenItem>}
      </BoundsContext.Provider>
    </GlobalContext.Provider>
  );
}

export default App;
