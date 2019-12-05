import React, { useState } from "react";
import { SnapshotDisplay } from './SnapshotDisplay';
import { useHistory } from "react-router-dom";

export const Snapshot = (props) => {
    const { state, state: { user, pieces, plants } } = props;
    let history = useHistory();

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
            body: JSON.stringify({ token: user.token, id: user.id, snapshot: jsonSnapshot }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    };

    const gotoSnapshots = (event) =>{
        history.push("/snapshots");
    }

    return <SnapshotDisplay click={click} gotoSnapshots={gotoSnapshots}></SnapshotDisplay>;
};  