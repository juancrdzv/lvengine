import React,{useState,useContext} from "react";
import { SunflowerDisplay } from "./SunflowerDisplay";
import { GlobalContext } from "../../Contexts";

export const Sunflower = (props) =>{
    const { ine } = props;
    const globalContext = useContext(GlobalContext);
    const { plants,setPlants } = globalContext;

    useState(()=>{
        let timeOut=setTimeout((event)=>{  
            let cont =0;
            let copyPlants = [...plants];
            while(cont < copyPlants.length){
                if(Number(copyPlants[cont].key) === ine) {
                    
                    copyPlants.splice(cont);
                    setPlants((state)=>{
                        return copyPlants;
                    });
                }else{
                    cont++;
                }
            }
        }, 3000);

        return () => {
            clearTimeout(timeOut);
        }
    },[]);
    
    return  <SunflowerDisplay {...props}></SunflowerDisplay>;
}
