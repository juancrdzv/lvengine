/* eslint-disable default-case */
import React from "react";
import { Bounds } from "../../Utils";
import { Sunflower, Mushromm, Purple, Weird } from "../Plants";
import {
  Fence,
  VerticalFence,
  HorizontalGardener,
  VerticalGardener
} from "../GardeningItems";

let allBounds = null;
let position = null;
let _dispatch = null;
let _state = null;

export const setReferences = myRef => {
  let { objectsBounds, _position, state, dispatch } = myRef;
  position = _position;
  allBounds = objectsBounds;
  _dispatch = dispatch;
  _state = state;
};

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

  document.addEventListener("mousemove", event => {
    const { clientX, clientY } = event;
    if (clientX >= 0 && clientX <= 1024) {
      let offsetX, offsetY;
      switch (_state.hudSelectedPiece) {
        case "fenceV":
          offsetX = 6.25;
          offsetY = 25;
          break;
        case "fenceH":
          offsetX = 25;
          offsetY = 12.5;
          break;
        case "gardenH":
          offsetX = 25;
          offsetY = 12.5;
          break;
        case "gardenV":
          offsetX = 12.5;
          offsetY = 25;
          break;
      }
      _dispatch({
        type: "SET_GARDEN_ITEM_POSITION",
        payload: { x: clientX - offsetX, y: clientY - offsetY }
      });

      _dispatch({ type: "SHOW_GARDEN_ITEM", payload: true });
    } else {
      _dispatch({ type: "SHOW_GARDEN_ITEM", payload: false });
    }
  });

  document.addEventListener("click", event => {
    const { clientX, clientY } = event;
    let d = new Date();
    let mili = d.getMilliseconds();

    if (clientX >= 0 && clientX <= 1024 && _state.showGardenItem) {
      switch (_state.hudSelectedPiece) {
        case "fenceV":
          _dispatch({
            type: "SET_PIECES",
            payload: (
              <VerticalFence
                key={mili}
                x={clientX - 7.5}
                y={clientY - 42.5}
              ></VerticalFence>
            )
          });
          break;
        case "fenceH":
          _dispatch({
            type: "SET_PIECES",
            payload: (
              <Fence key={mili} x={clientX - 42} y={clientY - 20.5}></Fence>
            )
          });
          break;
        case "gardenH":
          _dispatch({
            type: "SET_PIECES",
            payload: (
              <HorizontalGardener
                key={mili}
                x={clientX - 47}
                y={clientY - 23.5}
              ></HorizontalGardener>
            )
          });
          break;
        case "gardenV":
          _dispatch({
            type: "SET_PIECES",
            payload: (
              <VerticalGardener
                key={mili}
                x={clientX - 16.5}
                y={clientY - 31}
              ></VerticalGardener>
            )
          });
          break;
      }
    }
  });

  document.addEventListener("keydown", event => {
    event.preventDefault();

    switch (event.key) {
      case "Escape":
        _dispatch({ type: "SHOW_GARDEN_ITEM", payload: false });
        _dispatch({ type: "SET_HUD_SELECTED_PIECE", payload: "" });
        break;
      case "1":
        _dispatch({ type: "SET_HUD_SELECTED_PLANT", payload: "sunflower" });
        break;
      case "2":
        _dispatch({ type: "SET_HUD_SELECTED_PLANT", payload: "mushrooms" });
        break;
      case "3":
        _dispatch({ type: "SET_HUD_SELECTED_PLANT", payload: "purple" });
        break;
      case "4":
        _dispatch({ type: "SET_HUD_SELECTED_PLANT", payload: "weird" });
        break;
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
        const { x, y } = position;
        let d = new Date();
        let mili = d.getMilliseconds();

        switch (_state.hudSelectedPlant) {
          case "sunflower":
            _dispatch({
              type: "SET_PLANTS",
              payload: <Sunflower key={mili} ine={mili} x={x} y={y}></Sunflower>
            });
            break;
          case "mushrooms":
            _dispatch({
              type: "SET_PLANTS",
              payload: <Mushromm key={mili} x={x} y={y}></Mushromm>
            });
            break;
          case "purple":
            _dispatch({
              type: "SET_PLANTS",
              payload: <Purple key={mili} x={x} y={y}></Purple>
            });
            break;
          case "weird":
            _dispatch({
              type: "SET_PLANTS",
              payload: <Weird key={mili} x={x} y={y}></Weird>
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
