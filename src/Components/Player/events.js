/* eslint-disable default-case */
import {Bounds} from "../../Utils";
let allBounds= null;

export const setBoundsReference=(myRef)=>{
  allBounds=myRef;
}

export const playerEvents = (
  setBy,
  setPosition,
  setFrame,
  delta,
  groundBounds,
) => {
  let vel = 0.4;
  let playerWidth = 50;
  let playerHeight = 50;
  const charAniFrames = [0, 0, 0, 0, -49, -49, -49, -49, -97, -97, -97, -97];
  let currentFrame = 0;

  const checkForColision = (x,y)=>{
    let playerWidth = 50;
    let playerHeight = 50;
    let playerBounds = new Bounds(x,y,playerWidth,playerHeight);
    for(let i=0;i<allBounds.length;i++){
      if(allBounds[i].interSect(playerBounds)){
        return true;
      }
    }
    return false;
  };
  document.addEventListener("keydown", event => {
    switch (event.key) {
      case "ArrowRight":
        setBy("-97px");
        setPosition(state => {
           if ((state.x + playerWidth <= groundBounds.x + groundBounds.width) && !checkForColision(state.x,state.y)) {
            return { ...state, x: state.x + vel * delta.current };
          }
          return state;
        });
        break;
      case "ArrowLeft":
        setBy("-49px");
        setPosition(state => {
          if ((state.x >= groundBounds.x) && !checkForColision(state.x,state.y)) {
            return { ...state, x: state.x - vel * delta.current };
          }
          return state;
        });
        break;
      case "ArrowDown":
        setBy("0px");
        setPosition(state => {
          if ((state.y + playerHeight <= groundBounds.y + groundBounds.height) && !checkForColision(state.x,state.y)) {
            return { ...state, y: state.y + vel * delta.current };
          }
          return state;
        });
        break;
      case "ArrowUp":
        setBy("-145px");
        setPosition(state => {
          if ((state.y >= groundBounds.y) && !checkForColision(state.x,state.y)) {
            return { ...state, y: state.y - vel * delta.current };
          }
          return state;
        });
        break;
    }
    if (currentFrame < charAniFrames.length) {
      setFrame(charAniFrames[currentFrame]);
      currentFrame++;
    } else {
      currentFrame = 0;
    }
  });
};
