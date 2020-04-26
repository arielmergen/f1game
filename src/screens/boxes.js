import React, { useState, useEffect, useCallback, useReducer } from "react";

import apiClient from "./../apiClient";
//import { MECHANIC_PLACE_RULES, WHEEL_ACTIONS, WHEEL_POSITIONS, FILL_TANK, LIFT_CAR, JACKMAN } from "../constants";
import {
    MECHANIC,
    JACKMAN,
    GAS_MAN,
    LIFT_CAR,
    CHECK,
    UNFASTEN_WHEEL,
    FASTEN_WHEEL,
    CHANGE_WHEEL,
    FILL_TANK,
} from "../constants";

import Car from "./../layout/Car";

import MechanicContainer from "../components/Mechanics/MechanicContainer";
import SelectedMechanic from "./../components/Mechanics/SelectedMechanic";

const initialStateTask = {
    isActive: false,
    droppedin: "",
    task: "",
    mechanic: {},
    error: true,
    code: 0,
};
const reducerTask = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case LIFT_CAR:
            return {
                isActive: action.payload.data.isActive,
                droppedin: action.payload.data.mechanic.droppedin,
                task: action.type,
                mechanic: {
                    id: action.payload.data.mechanic.id,
                    role: action.payload.data.mechanic.role,
                },
                error: false,
            };
        case CHANGE_WHEEL:
            return {
                isActive: action.payload.data.isActive,
                droppedin: action.payload.data.mechanic.droppedin,
                task: action.type,
                mechanic: {
                    id: action.payload.data.mechanic.id,
                    role: action.payload.data.mechanic.role,
                },
                error: false,
            };
        case CHECK:
            return {
                isActive: action.payload.data.isActive,
                droppedin: action.payload.data.mechanic.droppedin,
                task: action.type,
                mechanic: {
                    id: action.payload.data.mechanic.id,
                    role: action.payload.data.mechanic.role,
                },
                error: false,
            };
        case UNFASTEN_WHEEL:
            return {
                isActive: action.payload.data.isActive,
                droppedin: action.payload.data.mechanic.droppedin,
                task: action.type,
                mechanic: {
                    id: action.payload.data.mechanic.id,
                    role: action.payload.data.mechanic.role,
                },
                error: false,
            };
        case FASTEN_WHEEL:
            return {
                isActive: action.payload.data.isActive,
                droppedin: action.payload.data.mechanic.droppedin,
                task: action.type,
                mechanic: {
                    id: action.payload.data.mechanic.id,
                    role: action.payload.data.mechanic.role,
                },
                error: false,
            };
        case FILL_TANK:
            return {
                isActive: action.payload.data.isActive,
                droppedin: action.payload.data.mechanic.droppedin,
                task: action.type,
                mechanic: {
                    id: action.payload.data.mechanic.id,
                    role: action.payload.data.mechanic.role,
                },
                error: false,
            };
        case CHECK:
            return {
                isActive: action.payload.data.isActive,
                droppedin: action.payload.data.mechanic.droppedin,
                task: action.type,
                mechanic: {
                    id: action.payload.data.mechanic.id,
                    role: action.payload.data.mechanic.role,
                },
                error: false,
            };
        case "FINISH_TASK":
            return state;
        default:
            return state;
    }
};

const initialTaskMessage = {
    isFinish: true,
    task: "",
    error: true,
    code: 0,
    message: "",
};

const reducerTaskMessage = (state, action) => {
    switch (action.type) {
        case "FETCH_TASK_START":
            return {
                isFinish: action.payload.isFinish,
                task: action.payload.task,
            };
        case "FETCH_TASK_END":
            return {
                isFinish: action.payload.isFinish,
                task: action.payload.task,
            };
        case "FETCH_TASK_ERROR":
            return {
                isFinish: true,
                task: action.payload.task,
                error: true,
                code: action.payload.code,
                message: action.payload.message,
            };
        default:
            return state;
    }
};

const initialStateTeam = {
    loading: true,
    id: "",
    name: "",
    members: [],
};
const reducerTeam = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                loading: true,
                id: "",
                name: "",
                members: [],
            };
        case "FETCH_FINISH":
            return {
                loading: false,
                id: action.payload.id,
                name: action.payload.name,
                members: action.payload.members,
            };
    }
};

const initialStateCar = {
    loading: true,
    id: "",
    fuel: 0,
    lifted: false,
    wheels: [],
};
const reducerCar = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                loading: true,
                id: "",
                fuel: 0,
                lifted: false,
                wheels: [],
            };
        case "FETCH_FINISH":
            return {
                loading: false,
                id: action.payload.id,
                fuel: action.payload.fuel,
                lifted: action.payload.lifted,
                wheels: action.payload.wheels,
            };
    }
};

//SELECT MECHANIC
const initialStateMechanicSelected = {
    loading: true,
    selected: false,
    id: "",
    name: "",
    rol: "",
    image: "",
    droppedin: {},
};

const reducerSelectedMechanic = (state, action) => {
    switch (action.type) {
        case "MECHANIC_SELECTED":
            return {
                selected: true,
                id: action.payload.mechanic.id,
                name: action.payload.mechanic.name,
                role: action.payload.mechanic.role,
                image: action.payload.mechanic.image,
                droppedin: action.payload.droppedin,
            };
        case "MECHANIC_UNSELECTED":
            return {
                selected: false,
                id: "",
                name: "",
                rol: "",
                droppedin: {},
            };
        default:
            return state;
    }
};

const Boxes = (props) => {
    const { getGameState } = props;

    const [stateTask, dispatchTask] = useReducer(reducerTask, initialStateTask);
    const [stateMessageTask, dispatchMessageTask] = useReducer(
        reducerTaskMessage,
        initialTaskMessage
    );
    const [stateCar, dispatchCar] = useReducer(reducerCar, initialStateCar);
    const [stateTeam, dispatchTeam] = useReducer(reducerTeam, initialStateTeam);
    const [stateMechanicSelected, dispatchSelectedMechanic] = useReducer(
        reducerSelectedMechanic,
        initialStateMechanicSelected
    );
    const [positionActive, setPositionActive] = useState({});
    const [isLoadingPage, setisLoadingPage] = useState(false);
    const [checkStatus, setCheckStatus] = useState(false);
    const [statusInternalCar, setStatusInternalCar] = useState({});
    const [statusCar, setStatusCar] = useState({});
    const { team } = getGameState;

    useEffect(() => {
        dispatchCar({ type: "FETCH_START" });
        apiClient.createCar().then((car) => {
            dispatchCar({ type: "FETCH_FINISH", payload: car });
        });
    }, []);

    useEffect(() => {
        if (stateCar.id === "") return;

        let cardId = stateCar.id;
        const checkStatusCar = (cardId) => {
            apiClient
                .check(cardId)
                .then((response) => {
                    setCheckStatus(false);
                    setStatusCar(response);
                })
                .catch((error) => console.log(error));
        };
        checkStatusCar(cardId);
    }, [checkStatus]);

    /*Internal status*/
    useEffect(() => {
        console.log(statusInternalCar);
    }, [statusInternalCar]);

    useEffect(() => {
        if (!stateCar.loading) {
            setisLoadingPage(true);
        }
    }, [stateCar, stateCar.loading]);

    useEffect(() => {
        if (stateMechanicSelected.selected) {
            setPositionActive({
                ...positionActive,
                [stateMechanicSelected.id]: stateMechanicSelected,
            });
        }
        return () => {
            setPositionActive("");
        };
    }, [stateMechanicSelected]);

    useEffect(() => {}, [positionActive]);

    /*MAnage TASKS*/
    useEffect(() => {
        if (!stateTask.isActive) return;
        if (LIFT_CAR === stateTask.task) {
            if ("front" !== stateTask.droppedin.position) {
                dispatchMessageTask({
                    type: "FETCH_TASK_ERROR",
                    payload: {
                        code: 1024,
                        message:
                            "Um..,Boss.., Can only lift the car from the front",
                    },
                });
                return;
            }

            if (
                Object.keys(statusInternalCar).length !== 0 &&
                statusInternalCar.lifted
            ) {
                dispatchMessageTask({
                    type: "FETCH_TASK_ERROR",
                    payload: {
                        code: 1024,
                        message: "Um..., Boss...The car is Lifted",
                    },
                });
                return;
            }
            dispatchMessageTask({
                type: "FETCH_TASK_START",
                payload: { task: LIFT_CAR, isFinish: false },
            });
            const data = {
                carId: stateCar.id,
                mechanicId: stateTask.mechanic.id,
            };
            apiClient
                .liftCar(data)
                .then((response) => {
                    if (response.code === 18) {
                        dispatchMessageTask({
                            type: "FETCH_TASK_ERROR",
                            payload: {
                                code: response.code,
                                message: response.message,
                            },
                        });
                    } else {
                        dispatchCar({
                            type: "FETCH_FINISH",
                            payload: response,
                        });
                        setStatusInternalCar({
                            ...statusInternalCar,
                            lifted: response.lifted,
                        });
                        dispatchTask({ type: "FINISH_TASK" });
                        dispatchMessageTask({
                            type: "FETCH_TASK_END",
                            payload: { task: LIFT_CAR, isFinish: true },
                        });

                        setCheckStatus(true);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (
            CHANGE_WHEEL === stateTask.task ||
            UNFASTEN_WHEEL === stateTask.task ||
            FASTEN_WHEEL === stateTask.task
        ) {
            if (
                stateTask.droppedin.position === "front" ||
                stateTask.droppedin.position === "fuel"
            ) {
                dispatchMessageTask({
                    type: "FETCH_TASK_ERROR",
                    payload: {
                        code: 14,
                        message: "Um..., Boss...That isn´t the wheel.",
                    },
                });
                return;
            }

            if (
                stateTask.mechanic.role === JACKMAN &&
                !statusInternalCar.hasOwnProperty("wheel")
            ) {
                dispatchMessageTask({
                    type: "FETCH_TASK_ERROR",
                    payload: {
                        code: 1024,
                        message:
                            "Um..., Boss... Before do you need Unfasten the wheel.",
                    },
                });
                return;
            }

            if (Object.keys(statusInternalCar).length === 0) {
                dispatchMessageTask({
                    type: "FETCH_TASK_ERROR",
                    payload: {
                        code: 12,
                        message:
                            "You do need to Lift the car for this action...",
                    },
                });
                return;
            }

            if (
                stateTask.task === FASTEN_WHEEL &&
                !statusInternalCar.hasOwnProperty("wheel")
            ) {
                dispatchMessageTask({
                    type: "FETCH_TASK_ERROR",
                    payload: {
                        code: 14,
                        message:
                            "To this action you do need unfasten the wheel first action (Press de button Unfasten)",
                    },
                });
                return;
            }

            if (statusInternalCar.hasOwnProperty("wheel")) {
                if (
                    stateTask.task === UNFASTEN_WHEEL &&
                    statusInternalCar.wheel[stateTask.droppedin.position] ===
                        "LOOSE"
                ) {
                    dispatchMessageTask({
                        type: "FETCH_TASK_ERROR",
                        payload: {
                            code: 14,
                            message: "Um..., Boss...The wheel is Unfasten",
                        },
                    });
                    return;
                }

                if (
                    stateTask.task === CHANGE_WHEEL &&
                    statusInternalCar.wheel[stateTask.droppedin.position] ===
                        "CHANGED"
                ) {
                    dispatchMessageTask({
                        type: "FETCH_TASK_ERROR",
                        payload: {
                            code: 14,
                            message:
                                "Um..., Boss...The wheel has already Changed",
                        },
                    });
                    return;
                }

                if (
                    stateTask.task === FASTEN_WHEEL &&
                    statusInternalCar.wheel[stateTask.droppedin.position] ===
                        "READY"
                ) {
                    dispatchMessageTask({
                        type: "FETCH_TASK_ERROR",
                        payload: {
                            code: 14,
                            message:
                                "Um..., Boss...The wheel already was changed and Fasten...",
                        },
                    });
                    return;
                }

                if (
                    stateTask.task === CHANGE_WHEEL &&
                    statusInternalCar.wheel[stateTask.droppedin.position] !==
                        "LOOSE"
                ) {
                    dispatchMessageTask({
                        type: "FETCH_TASK_ERROR",
                        payload: {
                            code: 14,
                            message:
                                "Um..., Boss...to this action you do need unfasten the wheel first action (Press de button Unfasten)",
                        },
                    });
                    return;
                }
                if (
                    stateTask.task === FASTEN_WHEEL &&
                    statusInternalCar.wheel[stateTask.droppedin.position] !==
                        "CHANGE"
                ) {
                    dispatchMessageTask({
                        type: "FETCH_TASK_ERROR",
                        payload: {
                            code: 14,
                            message:
                                "Um..., Boss...to this action you do need change the wheel first (Press de button Change)",
                        },
                    });
                    return;
                }
            }
            dispatchMessageTask({
                type: "FETCH_TASK_ERROR",
                payload: {
                    code: 12,
                    message: "You do need to Lift the car for this action...",
                },
            });

            dispatchMessageTask({
                type: "FETCH_TASK_START",
                payload: { task: stateTask.task, isFinish: false },
            });

            const data = {
                mechanicId: stateTask.mechanic.id,
                carId: stateCar.id,
                position: stateTask.droppedin.position,
                action: stateTask.task,
            };

            apiClient
                .wheelAction(data)
                .then((response) => {
                    console.log(response);
                    if (
                        response.code === 6 ||
                        response.code === 10 ||
                        response.code === 12 ||
                        response.code === 13 ||
                        response.code === 14
                    ) {
                        //car not lifted
                        dispatchTask({
                            type: "FETCH_TASK_ERROR",
                            payload: {
                                code: response.code,
                                message: response.message,
                            },
                        });
                        dispatchMessageTask({
                            type: "FETCH_TASK_ERROR",
                            payload: {
                                code: response.code,
                                message: response.message,
                            },
                        });
                        dispatchTask({ type: "FETCH_TASK_END" });

                        //setStatusInternalCar({...statusInternalCar, lifted: response.lifted});
                    } else {
                        dispatchCar({
                            type: "FETCH_FINISH",
                            payload: response,
                        });
                        dispatchTask({ type: "FETCH_TASK_END" });
                        dispatchMessageTask({
                            type: "FETCH_TASK_END",
                            payload: { task: stateTask.task, isFinish: true },
                        });
                        response.wheels.filter((wheel) => {
                            if (
                                wheel.position === stateTask.droppedin.position
                            ) {
                                setStatusInternalCar({
                                    ...statusInternalCar,
                                    wheel: {
                                        [stateTask.droppedin.position]:
                                            wheel.status,
                                    },
                                });
                            }
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (FILL_TANK === stateTask.task) {
            console.log(stateTask);
            if (stateTask.droppedin.position !== "fuel") {
                dispatchMessageTask({
                    type: "FETCH_TASK_ERROR",
                    payload: {
                        code: 1024,
                        message:
                            "You can only load gasoline from the Fuel position",
                    },
                });
                return;
            }
            const data = {
                mechanicId: stateTask.mechanic.id,
                carId: stateCar.id,
            };
            apiClient
                .fillTank(data)
                .then((response) => {
                    console.log(response);
                    dispatchCar({ type: "FETCH_FINISH", payload: response });
                    dispatchTask({ type: "FETCH_TASK_END" });
                    dispatchMessageTask({
                        type: "FETCH_TASK_END",
                        payload: { task: stateTask.task, isFinish: true },
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (CHECK === stateTask.task) {
            const data = {
                carId: stateCar.id,
            };
            console.log(stateTask);
            apiClient
                .check(data)
                .then((response) => {
                    dispatchTask({ type: "FETCH_TASK_END" });
                    dispatchMessageTask({
                        type: "FETCH_TASK_END",
                        payload: { task: stateTask.task, isFinish: true },
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        return () => {
            dispatchTask({ type: "" });
        };
    }, [stateTask]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-9 mb-2">
                    {isLoadingPage && (
                        <Car
                            car={stateCar}
                            dispatchSelectedMechanic={dispatchSelectedMechanic}
                        />
                    )}
                </div>

                <div className="col-3">
                    {stateMechanicSelected && (
                        <SelectedMechanic
                            selectedMechanic={stateMechanicSelected}
                            dispatchTask={dispatchTask}
                            task={stateTask}
                            stateMessageTask={stateMessageTask}
                        />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-9 pr-0 pl-0">
                    {isLoadingPage && (
                        <MechanicContainer
                            team={team}
                            dispatchSelectedMechanic={dispatchSelectedMechanic}
                            stateMechanicSelected={stateMechanicSelected}
                            positionActive={positionActive}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Boxes);
