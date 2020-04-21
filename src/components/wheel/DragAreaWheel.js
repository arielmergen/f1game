import React from 'react';

const statusWheel = (statusWhweel) =>{
    let statusClassNameWheel;
    switch(statusWhweel){
        case 'NEEDS_CHANGE' :
            statusClassNameWheel='need-change';
        break;
        case 'LOOSE' :
            statusClassNameWheel='loose';
        break;
        case 'READY' :
            statusClassNameWheel='ready';
        break;
        default:
            statusClassNameWheel='';
            break;
    }
    return statusClassNameWheel;
}

const DragAreaWheel = props => {
    const{setMechanicDropped, 
        getState, 
        setState, 
        setIsOver,
        position,
        statusWhweel, 
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
        className={`${className} ${statusWheel(statusWhweel)}`}>
            {props.children}
    </div>
)
}

export default DragAreaWheel;