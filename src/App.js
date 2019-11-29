import React, { useState, useEffect, useRef, useReducer } from "react";
import { BoundsContext, GlobalContext } from "./Contexts"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, Game } from "./Components";
import { globalReducer } from "./Reducers";
import { gloabalStore } from "./Stores";
import "./App.css";



function App() {
  let delta = useRef(0);
  let lastFrameTimeMs = 0;
  const [objectsBounds, setObjectsBounds] = useState([]);

  const [state, dispatch] = useReducer(globalReducer, gloabalStore);

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
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <Login dispatch={dispatch}></Login>} />
            <Route exact path='/game' render={() => <Game state={state} delta={delta}></Game>} />
            <Route exact path='/gardenadmin' render={() => <div>En construccion</div>} />
          </Switch>
        </BrowserRouter>
      </BoundsContext.Provider>
    </GlobalContext.Provider>
  );
}

export default App;
