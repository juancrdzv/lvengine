import React, { useState, useEffect } from "react";
import { SnapshotsDisplay } from './SnapshotsDisplay';
import { useHistory } from "react-router-dom";

export const Snapshots = (props) => {
    const { dispatch, state: { user } } = props;
    let [list, setList] = useState([]);
    let history = useHistory();

    const click = (event) => {
        history.push(`/game/${event.target.id}`);
    };

    useEffect(() => {
        if (!user)
            return;
        (async function (click) {
            const response = await fetch(`http://localhost:3008/snapshots?tk=${user.token}`);
            const json = await response.json();
            const { snapshots } = json;
            
            dispatch({ type: "SET_SNAPSHOTS", payload: snapshots });
            
            let _list = snapshots.map((snap) => {
                const { name, id } = snap;

                return <div onClick={click} key={id} id={id}>{name}</div>;
            });

            setList(_list);
        })(click);
    }, []);

    return (<SnapshotsDisplay list={list}></SnapshotsDisplay>);
};