import React, { useState, useEffect } from "react";

import { FRONT, FUEL } from "../constants";

import DropArea from "../components/DragDrop/DropArea";
import "./../css/grid.css";

const insideStyle = {
    backgroundColor: "#cccccc",
    opacity: 0.5,
};

const STATUS_WHEEL_STYLE = { 
    "NEEDS_CHANGE": "need-change", 
    "LOOSE": "loose", 
    "READY": "ready" 
}

const Car = (props) => {
    const { setMechanicDropped, car } = props;

    return (
        <div className={`car grid ${car.lifted ? "car-lifted" : ""} `}>
            <h1>{car.lifted ? "Car Lifted" : ""}</h1>
            <DropArea
                areaData={{ position: FRONT }}
                setDropedData={setMechanicDropped}
                className="front"
            ></DropArea>
            {car.wheels.map(({ position, status }) => (
                <DropArea
                    key={position}
                    areaData={{ position }}
                    statusWheel={status}
                    setDropedData={setMechanicDropped}
                    overStyle={insideStyle}
                    className={position + ' ' + STATUS_WHEEL_STYLE[status]}
                />
            ))}
            <DropArea
                areaData={{ position: FUEL }}
                setDropedData={setMechanicDropped}
                className="fuel"
            ></DropArea>
        </div>
    );
};

export default Car;
