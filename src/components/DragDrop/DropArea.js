import React, { useState } from "react";

const DragArea = (props) => {
    const {
        dispatchSelectedMechanic,
        isOver,
        setIsOver,
        areaData,
        className,
    } = props;

    const dragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = props.dropEffect;
        setIsOver(true);
    };

    const drop = (ev) => {
        let itemDropped = JSON.parse(ev.dataTransfer.getData("drag-item"));
        ev.dataTransfer.getData("text");
        dispatchSelectedMechanic({
            type: "MECHANIC_SELECTED",
            payload: { mechanic: itemDropped, droppedin: areaData },
        });
        ev.dataTransfer.clearData();
    };

    const dragEnter = (ev) => {
        ev.dataTransfer.getData("drag-item");
        ev.dataTransfer.dropEffect = "link";
        setIsOver(true);
    };

    const dragLeave = () => setIsOver(false);

    return (
        <div
            onDragOver={dragOver}
            onDrop={drop}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            className={`${className} ${isOver ? "overstyle" : ""}`}
        >
            {props.children}
        </div>
    );
};

const DropArea = (props) => {
    const { id, className, dispatchSelectedMechanic, areaData } = props;
    const [isOver, setIsOver] = useState(false);

    return (
        <DragArea
            id={id}
            isOver={isOver}
            areaData={areaData}
            dispatchSelectedMechanic={dispatchSelectedMechanic}
            className={className}
            setIsOver={setIsOver}
        >
            {props.children}
        </DragArea>
    );
};

export default DropArea;
