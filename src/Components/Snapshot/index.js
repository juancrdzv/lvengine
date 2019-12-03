import React, { useState } from "react";
import { SnapshotDisplay } from './SnapshotDisplay'

export const Snapshot = (props) => {
    const { state, state: { user, pieces, plants } } = props;

    const click = async (event) => {
        console.log(state);

        let jPlants = plants.map((plant) => {
            const { props: { x, y }, type: { name } } = plant;

            return { x, y, name };
        });

        let jPieces = pieces.map((piece) => {
            const { props: { x, y }, type: { name } } = piece;

            return { x, y, name };
        });

        let jsonSnapshot = JSON.stringify({
            plants: jPlants,
            pieces: jPieces
        });

        let response = await fetch('http://localhost:3008/snapshot', {
            method: 'POST',
            body: JSON.stringify({ token: user.token, snapshot: jsonSnapshot }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    };

    return <SnapshotDisplay click={click}></SnapshotDisplay>;
};  