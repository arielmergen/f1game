import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import * as dropEffects from "./../utils/dropEffects";

const draggingStyle = {
    opacity: 0.25,
};

const Drag = props =>{
    const [isDragging, setIsDragging] = useState(false);
    const image = useRef(null);

    useEffect(() => {
        image.current = null;
        if(props.dragImage){
            image.current = new Image();
            image.current.src = props.dragImage;
        }
    }, [props.dragImage]);


    const startDrag = ev => {
        setIsDragging(true);
        ev.dataTransfer.setData("drag-item", props.dataItem);
        ev.dataTransfer.effectAllowed = props.dropEffect;
        if(image.current){
            ev.dataTransfer.setDragImage(image.current, 0, 0);
        }
    }

    const dragEnd = () => setIsDragging(false);

    return (
        <div style={isDragging ? draggingStyle : {} } draggable onDragStart={startDrag} onDragEnd={dragEnd}>
            {props.children}
        </div>
    );

}

Drag.propTypes = {
    dataItem: PropTypes.string.isRequired,
    dragImage: PropTypes.string,
    dropEffect: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Drag.defaultProps = {
    dragImage: null,
    dropEffect: dropEffects.All,
};

export default Drag;