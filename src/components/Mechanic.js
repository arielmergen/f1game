import React, { useState, useRef } from "react";

const draggingStyle = {
    opacity: 0.25,
};
const Mechanic = (props) => {
    const { dataitem, dropeffect,setisDragging } = props;
    const startDrag = (ev) => {
        setisDragging(true);
        let parseDataItem = JSON.stringify(dataitem);
        ev.dataTransfer.setData("drag-item", parseDataItem);
        ev.dataTransfer.effectAllowed = dropeffect;
    };

    const dragEnd = (props) => setisDragging(false);
    return (
        <li draggable onDragStart={startDrag} onDragEnd={dragEnd}>
            {props.children}
        </li>
    );
};
export default Mechanic;
