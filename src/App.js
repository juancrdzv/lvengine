import React, { useEffect, useState } from "react";
import characters from "./characters.png";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener("keydown", event => {
      switch (event.key) {
        case "ArrowRight":
          setPosition(state => {
            return { ...state, x: state.x + 10 };
          });
          break;
        case "ArrowLeft":
          setPosition(state => {
            return { ...state, x: state.x - 10 };
          });
          break;
        case "ArrowDown":
          setPosition(state => {
            return { ...state, y: state.y + 10 };
          });
          break;
        case "ArrowUp":
          setPosition(state => {
            return { ...state, y: state.y - 10 };
          });
          break;
      }
    });
  }, []);

  let positionStyle = {
    position: "absolute",
    display: "inline-block",
    top: position.y,
    left: position.x,
    backgroundImage: `url(${characters})`,
    backgroundSize: "580px",
    width: "50px",
    height: "50px"
  };
  return (
    <div>
      <div style={positionStyle}></div>
    </div>
  );
}

export default App;
