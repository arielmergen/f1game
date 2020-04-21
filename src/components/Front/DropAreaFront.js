import React, { useState, useEffect } from "react";
import DragAreaFront from "./DragAreaFront";
const DropAreaFront = (props) => {

    const{id, className, lifted, getState, setState, setLifted, setMechanicDropped} = props;
    const [isOver, setIsOver] = useState(false);

    return (
        <DragAreaFront 
        id={id} 
        lifted={lifted} 
        getState={getState} 
        setState={setState} 
        setLifted={setLifted}
        isOver={isOver}
        setIsOver={setIsOver}
        setMechanicDropped={setMechanicDropped} 
        className={className}>
            {props.children}
        </DragAreaFront>
    );
};

export default DropAreaFront;
