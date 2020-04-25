import React from "react";


const DraggeableItem = (props) => {
    const { dataitem, dropeffect, setisDragging } = props;
    const startDrag = (ev) => {
        setisDragging(true);
        ev.dataTransfer.setData("drag-item", JSON.stringify({ ...dataitem }));
        ev.dataTransfer.effectAllowed = dropeffect;
    };

    const dragEnd = (props) => setisDragging(false);

    return (
        <li draggable onDragStart={startDrag} onDragEnd={dragEnd}>
            {props.children}
        </li>
    );
};
export default DraggeableItem;
