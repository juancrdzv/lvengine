import React from "react";
import { Sunflower, Mushromm, Purple, Weird } from "../Plants";
import {
  Fence,
  VerticalFence,
  HorizontalGardener,
  VerticalGardener
} from "../GardeningItems";

export function factory(type, x, y) {
  let d = new Date();
  let mili = d.getMilliseconds();

  switch (type) {
    case "sunflower":
      return <Sunflower key={mili} ine={mili} x={x} y={y}></Sunflower>;
    case "mushrooms":
      return <Mushromm key={mili} x={x} y={y}></Mushromm>;
    case "purple":
      return <Purple key={mili} x={x} y={y}></Purple>;
    case "weird":
      return <Weird key={mili} x={x} y={y}></Weird>;
    case "fenceV":
      return (
        <VerticalFence key={mili} x={x - 7.5} y={y - 42.5}></VerticalFence>
      );
    case "fenceH":
      return <Fence key={mili} x={x - 42} y={y - 20.5}></Fence>;
    case "gardenH":
      return (
        <HorizontalGardener
          key={mili}
          x={x - 47}
          y={y - 23.5}
        ></HorizontalGardener>
      );
    case "gardenV":
      return (
        <VerticalGardener key={mili} x={x - 16.5} y={y - 31}></VerticalGardener>
      );
  }
}
