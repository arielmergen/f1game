import React from 'react';

const DragAreaFront = props => {

    const{setMechanicDropped, 
        getState, 
        setState, 
        setIsOver,
        position,
        status, 
        className}=props;

    const dragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = props.dropEffect;
    };

    const drop = (ev) => {
        let itemDropped = JSON.parse(ev.dataTransfer.getData("drag-item"));
        setState({ ...getState, display: true, itemDropped, setIsOver: false });
        setIsOver(false);
        setMechanicDropped(itemDropped);
    };

    const dragEnter = (ev) => {
        ev.dataTransfer.dropEffect = "link";
        setState({ ...getState, setIsOver: false });
    };

    const dragLeave = () => setIsOver(false);
return( 
    <div 
        onDragOver={dragOver} 
        onDrop={drop} 
        onDragEnter={dragEnter} 
        onDragLeave={dragLeave} 
        className={className}>
            {props.children}
    </div>
)
}

export default DragAreaFront;