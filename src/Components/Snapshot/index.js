import React, { useState } from "react";
import { SnapshotDisplay } from './SnapshotDisplay'

export const Snapshot = (props) => {
    const { state: { user } } = props;

    const click = async (event) => {

        let response = await fetch('http://localhost:3008/snapshot', {
            method: 'POST',
            body: JSON.stringify({ token: user.token }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    };

    return <SnapshotDisplay click={click}></SnapshotDisplay>;
};  