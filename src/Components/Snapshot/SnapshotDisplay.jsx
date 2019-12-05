import React from "react";

export const SnapshotDisplay = (props) => {
    const { click, gotoSnapshots } = props;

    const snapStyle = {
        position: "absolute",
        width: "106px",
        height: "27px",
        backgroundColor: "aliceblue",
        display: "inline-block",
        zIndex: 1,
        padding: "10px"
    };

    return <div style={snapStyle}>
        <button onClick={click}>Take Snapshot</button>
        <button onClick={gotoSnapshots}>Show snapshots</button>
    </div>;
};