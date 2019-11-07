import React from "react";
import { House, Ground, Grass, Tree, Cactus, HorizontalGardener, VerticalGardener, Fence } from "../Components";

export const World = (props) => {
 

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
    
      <Cactus x={300} y={500}></Cactus>
      <Cactus x={800} y={300}></Cactus>
    </Ground>
  )
};