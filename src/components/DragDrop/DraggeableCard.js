import React from "react";

const DraggeableCard = props => {
    const {member} = props;
    const startDrag = (ev) => {
        ev.dataTransfer.setData("drag-item", JSON.stringify({ ...member }));
        ev.dataTransfer.effectAllowed = 'LINK';
    };

    return(
        <div className="card" draggable onDragStart={startDrag}>
            {props.children}
        </div>
    );
}

export default DraggeableCard;