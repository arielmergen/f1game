import React, { useState } from "react";

const DragArea = (props) => {
    const { setDropedData, getState, setState, areaData, status, className, overStyle } = props;

    const dragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = props.dropEffect;
    };

    const drop = (ev) => {
        let itemDropped = JSON.parse(ev.dataTransfer.getData("drag-item"));
        setState({ ...getState, display: true, itemDropped, setIsOver: false });
        setDropedData({ itemData: { ...itemDropped }, areaData: { ...areaData } });
    };

    const dragEnter = (ev) => {
        ev.dataTransfer.dropEffect = "link";
        setState({ ...getState, setIsOver: false });
    };

    // const dragLeave = () => setIsOver(false);

    return (
        <div
            onDragOver={dragOver}
            onDrop={drop}
            onDragEnter={dragEnter}
            className={className}
        >
            {props.children}
        </div>
    );
};

const DropArea = (props) => {
    const { id, className, overStyle = null, setDropedData, areaData } = props;
    const [isOver, setIsOver] = useState(false);
    const [getState, setState] = useState(null);

    return (
        <DragArea
            id={id}
            getState={getState}
            setState={setState}
            isOver={isOver}
            setIsOver={setIsOver}
            setDropedData={setDropedData}
            areaData={areaData}
            className={className}
            overStyle={overStyle ? overStyle : ""}
        >
            {props.children}
        </DragArea>
    );
};

export default DropArea;
