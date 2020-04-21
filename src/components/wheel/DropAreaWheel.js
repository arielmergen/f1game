import React, { useState, useEffect } from "react";
import DragAreaWheel from "./DragAreaWheel";
const DropAreaWheel = (props) => {
    const { getState, setState,setMechanicDropped, position,  statusWhweel, className} = props;
    const [isOver, setIsOver] = useState(false);

    return (
        <DragAreaWheel 
            isOver = {isOver}
            position={position}
            statusWhweel={statusWhweel}
            setIsOver = {setIsOver}
            setMechanicDropped={setMechanicDropped} 
            getState={getState} 
            setState={setState} 
            className={className}>
            {props.children}
        </DragAreaWheel>
    );
};

export default DropAreaWheel;
