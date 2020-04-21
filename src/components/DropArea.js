import React, { useState, useEffect } from "react";
import DragArea from "./DragArea";
const DropArea = (props) => {
    const { getState, setState,setMechanicDropped, position,  statusWhweel, className} = props;
    const [isOver, setIsOver] = useState(false);

    return (
        <DragArea 
            isOver = {isOver}
            setIsOver = {setIsOver}
            setMechanicDropped={setMechanicDropped} 
            getState={getState} 
            setState={setState} 
            className={className}>
            {props.children}
        </DragArea>
    );
};

export default DropArea;
