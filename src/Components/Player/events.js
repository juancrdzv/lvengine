export const playerEvents = (
  setBy,
  setPosition,
  setFrame,
  delta,
  groundBounds
) => {
  let vel = 0.4;
  let playerWidth = 50;
  let playerHeight = 50;
  const charAniFrames = [0, 0, 0, 0, -49, -49, -49, -49, -97, -97, -97, -97];
  let currentFrame = 0;

  document.addEventListener("keydown", event => {
    switch (event.key) {
      case "ArrowRight":
        setBy("-97px");
        setPosition(state => {
          if (state.x + playerWidth <= groundBounds.x + groundBounds.width) {
            return { ...state, x: state.x + vel * delta.current };
          }
          return state;
        });
        break;
      case "ArrowLeft":
        setBy("-49px");
        setPosition(state => {
          if (state.x >= groundBounds.x) {
            return { ...state, x: state.x - vel * delta.current };
          }
          return state;
        });
        break;
      case "ArrowDown":
        setBy("0px");
        setPosition(state => {
          if (state.y + playerHeight <= groundBounds.y + groundBounds.height) {
            return { ...state, y: state.y + vel * delta.current };
          }
          return state;
        });
        break;
      case "ArrowUp":
        setBy("-145px");
        setPosition(state => {
          if (state.y >= groundBounds.y) {
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
