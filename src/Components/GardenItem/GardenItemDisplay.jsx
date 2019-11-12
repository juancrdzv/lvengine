import React from "react";
import fh from "../../Assets/fenceHorizontal.png";
import fv from "../../Assets/fenceVertical.png";
import gv from "../../Assets/gardenVertical.png";
import gh from "../../Assets/gardenHorizontal.png";

export const GardenItemDisplay = props => {
  const { position } = props;
  const { x, y } = position;
  let item = null;
  let w,
    h = 0,
    bSize = "cover";

  switch (props.selectedIPiece) {
    case "fenceH":
      item = fh;
      w = 50;
      h = 25;
      break;
    case "fenceV":
      item = fv;
      w = 12.5;
      h = 50;
      bSize = "10px";
      break;
    case "gardenH":
      item = gh;
      w = 50;
      h = 25;
      break;
    case "gardenV":
      item = gv;
      w = 25;
      h = 50;
      break;
  }

  const gardenItemStyle = {
    position: "absolute",
    left: x,
    top: y,
    backgroundImage: `url(${item})`,
    width: `${w}px`,
    height: `${h}px`,
    backgroundRepeat: "no-repeat",
    backgroundSize: bSize
  };

  return <div style={gardenItemStyle}></div>;
};
