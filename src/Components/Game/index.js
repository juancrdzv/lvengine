import React, { Fragment } from "react";
import { Player, Hud, GardenItem } from "../";
import { World } from "../../Worlds";


export const Game = (props) => {
    const { state, state: { user }, delta } = props;

    return (
        user ? <Fragment>
            <Hud></Hud>
            <World></World>
            <Player
                groundBounds={{ x: 0, y: 0, width: 1024, height: 768 }}
                delta={delta}
            ></Player>
            {state.plants}
            {state.pieces}
            {state.showGardenItem && <GardenItem position={state.gardenItemPosition} selectedIPiece={state.hudSelectedPiece}></GardenItem>}
        </Fragment> : <div>Pleaser login</div>);
};