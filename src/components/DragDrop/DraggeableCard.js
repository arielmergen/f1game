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
    const selectedByClick = (ev) => {
        ev.preventDefault();
        if (Object.keys(positionActive) !== 0) {
            const memediId = positionActive.hasOwnProperty(member.id);
            if (memediId) {
                let itemDropped = {
                    id: member.id,
                    name: member.name,
                    role: member.role,
                    selected: member.selected,
                    image: member.image,
                };
                dispatchSelectedMechanic({
                    type: "MECHANIC_SELECTED",
                    payload: {
                        mechanic: itemDropped,
                        droppedin: positionActive[member.id].droppedin,
                    },
                });
            }
        }
    };

    return (
        <div
            id={member.id}
            className="card"
            draggable
            onDragStart={startDrag}
            onDragOver={ondragOver}
            onClick={selectedByClick}
        >
            {props.children}
        </div>
    );
};

export default DraggeableCard;
