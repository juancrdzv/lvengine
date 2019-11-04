import React, { useState, useEffect, useRef, useReducer } from "react";
import { BoundsContext, GlobalContext } from "./Contexts"
import { World } from "./Worlds";
import { Player, Hud, GardenItem } from "./Components";
import "./App.css";



function App() {
  let delta = useRef(0);
  let lastFrameTimeMs = 0;
  const [objectsBounds, setObjectsBounds] = useState([]);
 
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_HUD_SELECTED_PLANT":
        return { ...state, hudSelectedPlant: action.payload };
      case "SET_PLANTS":
        return { ...state, plants: [state.plants, action.payload] };
      case "SET_PIECES":
        return state;
      case "SET_GARDEN_ITEM_POSITION":
        return { ...state, gardenItemPosition: action.payload };
      case "SET_HUD_SELECTED_PIECE":
        return { ...state, hudSelectedPiece: action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    gardenItemPosition: { x: 0, y: 0 },
    hudSelectedPlant: 'sunflower',
    hudSelectedPiece: '',
    plants: [],
    pieces: [],
  });

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
        <GardenItem position={state.gardenItemPosition}></GardenItem>
      </BoundsContext.Provider>
    </GlobalContext.Provider>
  );
}

export default App;
