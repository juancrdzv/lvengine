import React, { useState,useEffect, useRef, } from "react";
import { House, Ground, Player, Tree, Cactus } from "./Components";
import { BoundsContext } from "./Contexts/BoundsContext"
import "./App.css";

function App() {
  let delta = useRef(0);
  let lastFrameTimeMs = 0;
  let [objectsBounds,setObjectsBounds] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mainLoop = timestamp => {
    delta.current = timestamp - lastFrameTimeMs; // get the delta time since last frame
    lastFrameTimeMs = timestamp;
    requestAnimationFrame(mainLoop);
  };

  useEffect(() => {
    requestAnimationFrame(mainLoop);
  }, [mainLoop]);

  return (
    <BoundsContext.Provider value={{objectsBounds,setObjectsBounds}}>
    <Ground x={0} y={0} width={1024} height={768}>
      <Tree y={-60} x={-60}></Tree>
      <Tree y={90} x={-60}></Tree>
      <Tree y={240} x={-60}></Tree>
      <Tree y={390} x={-60}></Tree>
      <Tree y={-60} x={60}></Tree>
      <Tree y={-60} x={180}></Tree>
      <Tree y={-60} x={300}></Tree>
      <Tree y={-60} x={420}></Tree>
      <Tree y={-60} x={540}></Tree>
      <Tree y={-60} x={660}></Tree>
      <House></House>
      <Cactus x={300} y={400}></Cactus>
      <Cactus x={800} y={300}></Cactus>
      <Player
        groundBounds={{ x: 0, y: 0, width: 1024, height: 768 }}
        delta={delta}
      ></Player>
    </Ground>
    </BoundsContext.Provider>
  );
}

export default App;
