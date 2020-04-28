import React from "react";

const DraggeableCard = (props) => {
    const {
        member,
        positionActive,
        dispatchSelectedMechanic,
        stateMechanicSelected,
    } = props;

    const startDrag = (ev) => {
        ev.dataTransfer.setData("text/uri-list", member.image);
        ev.dataTransfer.setData("text", member.id);
        ev.dataTransfer.setData("drag-item", JSON.stringify({ ...member }));
        ev.dataTransfer.effectAllowed = "move";
    };

    const ondragOver = (ev) => {
        // console.log(member);
        ev.dataTransfer.getData("text/uri-list");
    };

    return (
        <div
            id={member.id}
            className="card"
            draggable
            onDragStart={startDrag}
            onDragOver={ondragOver}
        >
            {props.children}
        </div>
    );
};

export default DraggeableCard;
