import React from "react";

export const SpriteDisplay = props => {
  let spriteStyle;
  const {
    width,
    height,
    spriteImage,
    bX,
    bY,
    bSize,
    x,
    y,
    backgroundColor,
    border,
    zIndex
  } = props;

  spriteStyle = "width" in props ? { ...spriteStyle, width } : spriteStyle;
  spriteStyle = "height" in props ? { ...spriteStyle, height } : spriteStyle;
  spriteStyle =
    "spriteImage" in props
      ? { ...spriteStyle, backgroundImage: `url(${spriteImage}` }
      : spriteStyle;
  spriteStyle =
    "bX" in props ? { ...spriteStyle, backgroundPositionX: bX } : spriteStyle;
  spriteStyle =
    "bY" in props ? { ...spriteStyle, backgroundPositionY: bY } : spriteStyle;
  spriteStyle =
    "bSize" in props ? { ...spriteStyle, backgroundSize: bSize } : spriteStyle;
  spriteStyle = "x" in props ? { ...spriteStyle, left: x } : spriteStyle;
  spriteStyle = "y" in props ? { ...spriteStyle, top: y } : spriteStyle;
  spriteStyle =
    "backgroundColor" in props
      ? { ...spriteStyle, backgroundColor: backgroundColor }
      : spriteStyle;
  spriteStyle =
    "border" in props ? { ...spriteStyle, border: border } : spriteStyle;

  spriteStyle = "zIndex" in props ? {...spriteStyle, zIndex:zIndex } : spriteStyle;
  spriteStyle["position"] = "absolute";
  spriteStyle["display"] = "inline-block";

  return <div style={spriteStyle}>{props.children}</div>;
};
