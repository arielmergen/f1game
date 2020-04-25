import React, { useState } from "react";

const DragArea = (props) => {
    const { dispatchSelectedMechanic, isOver, areaData, className } = props;

    const dragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = props.dropEffect;
        // setIsOver(true);
    };

    const drop = (ev) => {
        let itemDropped = JSON.parse(ev.dataTransfer.getData("drag-item"));
        // setState({ ...getState, display: true, itemDropped, setIsOver: false });
        // setDropedData({ itemData: { ...itemDropped }, areaData: { ...areaData } });
        dispatchSelectedMechanic({type:'MECHANIC_SELECTED', payload:{mechanic:itemDropped, droppedin:areaData }});
    };

    const dragEnter = (ev) => {
        ev.dataTransfer.dropEffect = "link";
        // setState({ ...getState, setIsOver: true });
    };

    const dragLeave = () =>console.log(false);



    return (
        <div
            onDragOver={dragOver}
            onDrop={drop}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            className={`${className} ${isOver ? 'overstyle' : ''}` }
        >
            {props.children}
        </div>
    );
};

const DropArea = (props) => {
    const { id, className, dispatchSelectedMechanic, areaData } = props;
    const [isOver, setIsOver] = useState(false);
    const [getState, setState] = useState(null);

    return (
        <DragArea
            id={id}
            isOver={isOver}
            areaData={areaData}
            dispatchSelectedMechanic={dispatchSelectedMechanic}
            className={className}
        >
            {props.children}
        </DragArea>
    );
};

export default DropArea;
