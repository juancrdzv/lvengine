import React, { Fragment, useEffect } from "react";
import { Player, Hud, GardenItem, Snapshot } from "../";
import { World } from "../../Worlds";
import { factory } from "../Player/factory";

export const Game = (props) => {
    const { state, state: { user, snapshots }, delta, dispatch } = props;

    useEffect(() => {
        const { match: { params: { id } } } = props;
        if (id > 0) {
            const data = JSON.parse(snapshots[id - 1].data);
            data.plants.forEach((d) => {
                let { x, y, name } = d;
                name = name.toLowerCase();
                dispatch({
                    type: "SET_PLANTS",
                    payload: factory(name, x, y)
                });
            });

            data.pieces.forEach((d) => {
                let { x, y, name } = d;
                dispatch({
                    type: "SET_PIECES",
                    payload: factory(name, x, y)
                });
            });
        }
    }, []);

    return (
        user ? <Fragment>
            <Hud></Hud>
            <Snapshot state={state}></Snapshot>
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