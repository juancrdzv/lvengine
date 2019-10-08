import React,{useContext,useEffect} from "react";
import { SpriteDisplay } from "./SpriteDisplay";
import { Bounds } from "../../Utils"
import {BoundsContext} from "../../Contexts/BoundsContext"

export const Sprite = props => {
  let {x,y,width,height,addBounds} = props;
  
  let boundsContext = useContext(BoundsContext);
  
  useEffect(()=>{
    if(addBounds){
      // eslint-disable-next-line react-hooks/exhaustive-deps
      width = width.indexOf('px') > -1 ? Number(width.replace("px","")) : width;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      height = height.indexOf('px') > -1 ? Number(height.replace("px","")) : height;
      
      let bounds = new Bounds(x,y,width,height);
      boundsContext.setObjectsBounds((state)=>{
        return [...state,bounds];
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  

  return <SpriteDisplay {...props}>{props.children}</SpriteDisplay>;
};
