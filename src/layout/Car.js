import React from "react";

import { FRONT, FUEL } from "../constants";

import DropArea from "../components/DragDrop/DropArea";
import "./../css/grid.css";

import {
    NEEDS_CHANGE,
    LOOSE,
    REMOVED,
    PLACED,
    CHANGED,
    READY,
} from "./../constants";

const STATUS_WHEEL_STYLE = {
    NEEDS_CHANGE,
    LOOSE,
    READY,
    REMOVED,
    PLACED,
    CHANGED,
};

const Car = (props) => {
    const { dispatchSelectedMechanic, car } = props;

    const { loading } = car;
    return (
        <>
            {!loading && (
                <div className={`car grid ${car.lifted ? "car-lifted" : ""} `}>
                    <DropArea
                        dispatchSelectedMechanic={dispatchSelectedMechanic}
                        areaData={{
                            car: { carId: car.id, lifted: car.lifted },
                            position: FRONT,
                        }}
                        className={`front ${car.lifted ? "READY" : ""} `}
                    />
                    {car.wheels.map(({ position, status }) => (
                        <DropArea
                            key={position}
                            areaData={{
                                car: {
                                    carId: car.id,
                                    lifted: car.lifted,
                                    wheel: {
                                        position: position,
                                        status: status,
                                    },
                                },
                                position: position,
                            }}
                            statusWheel={status}
                            // setDropedData={setMechanicDropped}
                            dispatchSelectedMechanic={dispatchSelectedMechanic}
                            className={
                                position + " " + STATUS_WHEEL_STYLE[status]
                            }
                        />
                    ))}
                    <DropArea
                        areaData={{
                            car: { carId: car.id, fuel: car.fuel },
                            position: FUEL,
                        }}
                        // setDropedData={setMechanicDropped}
                        dispatchSelectedMechanic={dispatchSelectedMechanic}
                        className={`fuel ${car.fuel === 100 ? "READY" : ""} `}
                    />
                </div>
            )}
        </>
    );
};

export default Car;
