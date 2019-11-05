import React from "react";
import { House, Ground, Grass, Tree, Cactus, HorizontalGardener, VerticalGardener, Fence } from "../Components";

export const World = (props) => {
  let grass = [];

  let x = 150, y = 150;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      grass.push(<Grass x={x} y={y} key={`grass${i}${j}`}></Grass>);
      x += 30;
    }
    x = 150;
    y += 30;
  }

  return (
    <Ground x={0} y={0} width={1024} height={768}>
      <Tree y={-60} x={-60}></Tree>
      <Tree y={90} x={-60}></Tree>
      <Tree y={240} x={-60}></Tree>
      <Tree y={390} x={-60}></Tree>
      <Tree y={-60} x={60}></Tree>
      <Tree y={-60} x={180}></Tree>
      <Tree y={-60} x={300}></Tree>
      <Tree y={-60} x={420}></Tree>
      <Tree y={-60} x={540}></Tree>
      <Tree y={-60} x={660}></Tree>
      <House></House>
      {grass}
      <Cactus x={300} y={500}></Cactus>
      <Cactus x={800} y={300}></Cactus>
      <Fence x={706} y={500}></Fence>
      <Fence x={784} y={500}></Fence>
      <Fence x={863} y={500}></Fence>
      <Fence x={942} y={500}></Fence>
      <HorizontalGardener x={119} y={100}></HorizontalGardener>
      <HorizontalGardener x={326} y={100}></HorizontalGardener>
      <HorizontalGardener x={119} y={394}></HorizontalGardener>
      <HorizontalGardener x={326} y={394}></HorizontalGardener>
      <VerticalGardener x={400} y={231}></VerticalGardener>
      <VerticalGardener x={109} y={231}></VerticalGardener>
    </Ground>
  )
};