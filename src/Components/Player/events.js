/* eslint-disable default-case */
import React from "react";
import { Bounds } from "../../Utils";
import { Sunflower } from "../Sunflower";

let allBounds = null;
let position = null;
let hudItem = null;

export const setHudItem = myRef =>{
  hudItem = myRef;
};

export const setBoundsReference = myRef => {
  allBounds = myRef;
};

export const setPositionReference = myRef =>{
  position = myRef;
};

export const playerEvents = (
  setBy,
  setPosition,
  setFrame,
  delta,
  groundBounds,
  setPlants,
) => {
  let vel = 0.4;
  let playerWidth = 50;
  let playerHeight = 50;
  const charAniFrames = [0, 0, 0, 0, -49, -49, -49, -49, -97, -97, -97, -97];
  let currentFrame = 0;

  const checkForColision = (x, y) => {
    let playerWidth = 50;
    let playerHeight = 50;
    let playerBounds = new Bounds(x, y, playerWidth, playerHeight);
    for (let i = 0; i < allBounds.length; i++) {
      if (allBounds[i].interSect(playerBounds)) {
        return true;
      }
    }
    return false;
  };
  document.addEventListener("keydown", event => {
    event.preventDefault();
    switch (event.key) {
      case "ArrowRight":
        setBy("-97px");
        setPosition(state => {
          let newPosition = state.x + vel * delta.current;
          if (checkForColision(newPosition, state.y)) {
            return state;
          } else if (
            state.x + playerWidth <=
            groundBounds.x + groundBounds.width
          ) {
            return { ...state, x: newPosition };
          }

          return state;
        });
        break;
      case "ArrowLeft":
        setBy("-49px");
        setPosition(state => {
          let newPosition = state.x - vel * delta.current;
          if (checkForColision(newPosition, state.y)) {
            return state;
          } else if (state.x >= groundBounds.x) {
            return { ...state, x: newPosition };
          }
          return state;
        });
        break;
      case "ArrowDown":
        setBy("0px");
        setPosition(state => {
          let newPosition = state.y + vel * delta.current;
          if (checkForColision(state.x, newPosition)) {
            return state;
          } else if (
            state.y + playerHeight <=
            groundBounds.y + groundBounds.height
          ) {
            return { ...state, y: newPosition };
          }
          return state;
        });
        break;
      case "ArrowUp":
        setBy("-145px");
        setPosition(state => {
          let newPosition = state.y - vel * delta.current;
          if (checkForColision(state.x, newPosition)) {
            return state;
          } else if (state.y >= groundBounds.y) {
            return { ...state, y: newPosition };
          }
          return state;
        });
        break;
      case " ":
        const {x,y} = position;
        switch(hudItem){
          case "sunflower":
              setPlants((state)=>{
                return [...state,<Sunflower x={x} y={y}></Sunflower>];
              });
          break;
          case "mushrooms":
              setPlants((state)=>{
                return [...state,"sunflower"];
              });
          break;
          case "purple":
              setPlants((state)=>{
                return [...state,"sunflower"];
              });
          break;
          case "weird":
              setPlants((state)=>{
                return [...state,"sunflower"];
              });
          break;
        }
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
