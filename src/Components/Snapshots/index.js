import React, { useState, useEffect } from "react";
import { SnapshotsDisplay } from './SnapshotsDisplay';

export const Snapshots = (props) => {
    const { state,state: { user } } = props;

    useEffect(() => {
        if(!user)
            return;
        (async function () {
            let response = await fetch(`http://localhost:3008/snapshots?tk=${user.token}`);
            let json = await response.json();
            console.log(json);
        })();
    }, []);

    return (<SnapshotsDisplay></SnapshotsDisplay>);
};