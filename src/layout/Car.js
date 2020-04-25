import React from "react";

import { FRONT, FUEL } from "../constants";

import DropArea from "../components/DragDrop/DropArea";
import "./../css/grid.css";

const STATUS_WHEEL_STYLE = { 
    "NEEDS_CHANGE": "need-change", 
    "LOOSE": "loose", 
    "READY": "ready" 
}

const Car = (props) => {
    const { dispatchSelectedMechanic, car } = props;
    const {loading} = car;
        return (
        <>
         {!loading && 
        <div className={`car grid ${car.lifted ? "car-lifted" : ""} `}>
            <DropArea
                dispatchSelectedMechanic={dispatchSelectedMechanic}
                areaData={{ position: FRONT }}
                className="front"
            />
            {car.wheels.map(({ position, status }) => (
            <DropArea
                key={position}
                areaData={{ position }}
                statusWheel={status}
                // setDropedData={setMechanicDropped}
                dispatchSelectedMechanic={dispatchSelectedMechanic}
                className={position + ' ' + STATUS_WHEEL_STYLE[status]}
            />
            ))}
            <DropArea
                areaData={{ position: FUEL }}
                // setDropedData={setMechanicDropped}
                dispatchSelectedMechanic={dispatchSelectedMechanic}
                className="fuel"
            />
        </div>
}</>
        

    )
};

export default Car;
