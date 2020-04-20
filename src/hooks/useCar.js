import React, { useState } from "react";

const useCarInformation = (datacar) => {
    // State from car
    const [getCarState, setCarState] = useState({});

    const CarInfomation = () => (
        <>
            <label>The Status Car needs</label>
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li className="list-group-item">Fuel: {datacar.fuel}</li>
                    <li className="list-group-item">Lifted: {datacar.lifted}</li>
                    <li className="list-group-item">
                        <ul class="list-group">
                            {datacar.wheels.map((wheel) => (
                                <li className={`list-group-item`}>
                                    <p className="text-capitalize">position: {wheel.position.replace("-", " ")}</p>
                                    <p className="text-capitalize">Status: {wheel.status.replace("_", " ")}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );

    return [getCarState, setCarState, CarInfomation];
};

export default useCarInformation;
