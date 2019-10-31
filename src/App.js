import React, { useState, useEffect, useRef } from "react";
import { BoundsContext, GlobalContext } from "./Contexts"
import { World } from "./Worlds";
import { Player, Hud, GardenItem } from "./Components";
import "./App.css";



function App() {
  let delta = useRef(0);
  let lastFrameTimeMs = 0;
  const [objectsBounds, setObjectsBounds] = useState([]);
  const [hudSelectedPlant, setHudSelectedPlant] = useState('sunflower');
  const [hudSelectedPiece, setHudSelectedPiece] = useState();
  const [plants, setPlants] = useState([]);
  const [pieces, setPieces] = useState([]);
  const [gardenItemPosition, setGardenItemPosition] = useState({ x: 0, y: 0 });

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

  let store = { hudSelectedPlant, setHudSelectedPlant, hudSelectedPiece, setHudSelectedPiece, plants, setPlants, pieces, setPieces, gardenItemPosition, setGardenItemPosition };

  return (
    <GlobalContext.Provider value={store}>
      <BoundsContext.Provider value={{ objectsBounds, setObjectsBounds }}>
        <Hud></Hud>
        <World></World>
        <Player
          groundBounds={{ x: 0, y: 0, width: 1024, height: 768 }}
          delta={delta}
        ></Player>
        {plants}
        {pieces}
        <GardenItem position={gardenItemPosition}></GardenItem>
      </BoundsContext.Provider>
    </GlobalContext.Provider>
  );
}

export default App;
