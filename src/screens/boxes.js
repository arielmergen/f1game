import React, { useState, useEffect } from "react";

import apiClient from "./../apiClient";
import { MECHANIC_PLACE_RULES, WHEEL_ACTIONS, FILL_TANK, LIFT_CAR, JACKMAN } from "../constants";

import Car from "./../layout/Car";

import MechanicList from "../components/Mechanics/MechanicList";
import SelectedMechanic from "./../components/Mechanics/SelectedMechanic";

const Boxes = (props) => {
    const { getGameState } = props;
    const { team } = getGameState;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [getMechanicDropped, setMechanicDropped] = useState(null);
    const [selectedMechanic, setSelectedMechanic] = useState(null);
    const [getMechanicAction, setMechanicAction] = useState(null);

    const [getCar, setCar] = useState(null);
    const [getInternalPositionTeam, setInternalPositionTeam] = useState(
        // TODO: remove duplicated id key in the reduced object
        team.members.reduce((obj, member) => ({ ...obj, [member.id]: member }), {})
    );

    useEffect(() => { 
        if(!error) return
        window.alert(error)
        setError(null)
    }, [error])

    useEffect(() => {
        if (!team) { 
            setError({ message: "Ops! I need a team to create a car, please reset the game" });
            return
        }
        setLoading(true);
        apiClient.createCar().then((car) => {
            setCar(car);
            setLoading(false);
        });
    }, []);

    // drag and drop validation and tracking positions
    useEffect(() => {
        if (!getMechanicDropped) return;

        const {
            areaData: { position },
            itemData,
        } = getMechanicDropped;

        if (!getCar.lifted && itemData.role !== JACKMAN) {
            setError("This is not his/her role for lift the Car");
            return 
        }
        
        // local auxiliar validations
        // if (getInternalPositionTeam[itemData.id].position) {
        //     setError(itemData.name + " is already busy");
        //     return
        // }

        // for (let [key, value] of Object.entries(getInternalPositionTeam)) {
        //     if(value.position && value.position === position) {
        //         setError(itemData.name + " can not do that job because another partner is working at " + position);
        //         return
        //     }
        // }

        if (MECHANIC_PLACE_RULES[position].indexOf(itemData.role) === -1) {
            setError(itemData.name + " it does not must be in that position");
            return
        }

        // track which mechanic is
        const newMechanicPosition = { ...itemData, position }
        setInternalPositionTeam({
            ...getInternalPositionTeam,
            [itemData.id]: newMechanicPosition,
        });
        setSelectedMechanic(newMechanicPosition);
    }, [getMechanicDropped]);

    // handle team actions
    useEffect(() => {
        if (!getMechanicAction) return;

        const data = { mechanicId: selectedMechanic.id, carId: getCar.id };
        const { position } = getInternalPositionTeam[selectedMechanic.id];

        let actionPromise = null;

        if (!getCar.lifted && LIFT_CAR !== getMechanicAction) {
            setError("First, lift the Car");
            return
        }

        // start api actions
        setLoading(true);
        if (LIFT_CAR === getMechanicAction) {
            actionPromise = apiClient.liftCar(data);
        }
        
        if (WHEEL_ACTIONS.indexOf(getMechanicAction) !== -1) {
            console.log('executing: ', getMechanicAction)
            actionPromise = apiClient.wheelAction({ ...data, position, action: getMechanicAction });
        }

        if (FILL_TANK === getMechanicAction) {
            actionPromise = apiClient.fillTank(data);
        }

        if (!actionPromise) {
            setLoading(false);
            setError("No action enable for the sector");
            return
        }

        actionPromise
            .then((newCarState) => {
                setCar(newCarState);
                setLoading(false);
            })
            .catch((err) => setError(err));
    }, [getMechanicAction]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        {getCar && (
                            <Car
                                car={getCar}
                                setCar={setCar}
                                setMechanicDropped={setMechanicDropped}
                                getInternalPositionTeam={getInternalPositionTeam}
                            />
                        )}
                        {getCar && <MechanicList items={getInternalPositionTeam} car={getCar} setSelectedMechanic={setSelectedMechanic} />}
                    </div>
                </div>
                <div className="col-md-3">
                    {selectedMechanic && (
                        <SelectedMechanic selectedMechanic={selectedMechanic} setMechanicAction={setMechanicAction} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Boxes;
