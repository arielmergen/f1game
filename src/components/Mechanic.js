import React, { useState, useRef } from "react";

const draggingStyle = {
    opacity: 0.25,
};
const Mechanic = (props) => {
    const { getState, setState } = props;
    const { dataitem, dropeffect } = props;
    const image = useRef(null);
    const startDrag = (ev) => {
        setState({ ...getState, isDragging: true });
        let parseDataItem = JSON.stringify(dataitem);
        ev.dataTransfer.setData("drag-item", parseDataItem);
        ev.dataTransfer.effectAllowed = dropeffect;
    };

    const dragEnd = (props) => setState({ ...getState, isDragging: false });
    return (
        <li draggable onDragStart={startDrag} onDragEnd={dragEnd}>
            {props.children}
        </li>
    );
};
export default Mechanic;
