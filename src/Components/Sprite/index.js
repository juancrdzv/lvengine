import React from "react";
import { SpriteDisplay } from "./SpriteDisplay";

export const Sprite = props => {
  return <SpriteDisplay {...props}>{props.children}</SpriteDisplay>;
};
