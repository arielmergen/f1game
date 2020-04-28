import React, {
    useState,
    useEffect,
    useCallback,
    useRef,
    useReducer,
} from "react";

import apiClient from "./../apiClient";

import {
    WHEEL_ACTIONS,
    WHEEL_CHANGE_RULES,
    WHEEL_TASK_RULES,
    WHEEL_POSITIONS,
    UNFASTEN_WHEEL,
    FASTEN_WHEEL,
    CHANGE_WHEEL,
    LIFT_CAR,
    LIFT_RULES,
    FILL_TANK,
    FUEL,
    CHECK,
} from "../constants";

import {
    initialStateTask,
    reducerTask,
    initialTaskMessage,
    reducerTaskMessage,
    initialStateCar,
    reducerCar,
    initialStateMechanicSelected,
    reducerSelectedMechanic,
    initialStateReducerApi,
    reducerDipatchApi,
} from "./../reducers";

import Car from "./../layout/Car";

import MechanicContainer from "../components/Mechanics/MechanicContainer";
import SelectedMechanic from "./../components/Mechanics/SelectedMechanic";

const Boxes = (props) => {
    const { getGameState, setGameState, setCurrentPage } = props;

    const [stateTask, dispatchTask] = useReducer(reducerTask, initialStateTask);
    const [stateMessageTask, dispatchMessageTask] = useReducer(
        reducerTaskMessage,
        initialTaskMessage
    );
    const [stateCar, dispatchCar] = useReducer(reducerCar, initialStateCar);
    const [stateMechanicSelected, dispatchSelectedMechanic] = useReducer(
        reducerSelectedMechanic,
        initialStateMechanicSelected
    );
    const [stateApi, dispatchApi] = useReducer(
        reducerDipatchApi,
        initialStateReducerApi
    );
    const [isLoadingPage, setisLoadingPage] = useState(false);
    const [score, setScore] = useState(100);

    const { team } = getGameState;

    useEffect(() => {
        dispatchCar({ type: "FETCH_START" });
        apiClient.createCar().then((car) => {
            dispatchCar({ type: "FETCH_FINISH", payload: car });
        });
    }, []);

    useEffect(() => {
        if (!stateCar.loading) {
            setisLoadingPage(true);
        }
    }, [stateCar, stateCar.loading]);

    useEffect(() => {
        if (score === 0) {
            setGameState({ ...getGameState, score });
            setCurrentPage({ page: "Score" });
        }
    }, [score]);

    useEffect(() => {
        if (Object.keys(stateApi.data).length === 0) return;
        console.log(stateApi.api);
        if (stateApi.api === LIFT_CAR) {
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: { task: LIFT_CAR, message: "LIFTING THE CAR" },
            });
            apiClient.liftCar(stateApi.data).then((response) => {
                if (!response.code) {
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: {
                            task: LIFT_CAR,
                            message: "THE CAR IS LIFTED",
                        },
                    });
                    dispatchCar({ type: "FETCH_FINISH", payload: response });
                }
            });
        }
        if (stateApi.api === FILL_TANK) {
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: { task: LIFT_CAR, message: "FILL TANK" },
            });
            apiClient.fillTank(stateApi.data).then((response) => {
                if (!response.code) {
                    console.log(response);
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: { task: LIFT_CAR, message: "TANK IS FULL" },
                    });
                    dispatchCar({ type: "FETCH_FINISH", payload: response });
                }
            });
        }
        if (stateApi.api === UNFASTEN_WHEEL) {
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: { task: UNFASTEN_WHEEL, message: "UNFASTEN WHEEL" },
            });

            apiClient.wheelAction(stateApi.data).then((response) => {
                if (response.code) {
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: { task: LIFT_CAR, message: response.message },
                    });
                } else {
                    dispatchCar({ type: "FETCH_FINISH", payload: response });
                    /*CLEAN MECHANIC*/
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: {
                            task: LIFT_CAR,
                            message: "THE WHEEL IS LOOSE",
                        },
                    });
                    dispatchSelectedMechanic({ type: "MECHANIC_UNSELECTED" });
                }
            });
        }
        if (stateApi.api === CHANGE_WHEEL) {
            console.log(stateApi);
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: { task: UNFASTEN_WHEEL, message: "CHANGE WHEEL" },
            });

            apiClient.wheelAction(stateApi.data).then((response) => {
                if (response.code) {
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: { task: LIFT_CAR, message: response.message },
                    });
                } else {
                    dispatchCar({ type: "FETCH_FINISH", payload: response });
                    /*CLEAN MECHANIC*/
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: {
                            task: LIFT_CAR,
                            message: "THE WHEEL IS REMOVED",
                        },
                    });
                    dispatchSelectedMechanic({ type: "MECHANIC_UNSELECTED" });
                }
            });
        }
        if (stateApi.api === FASTEN_WHEEL) {
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: { task: UNFASTEN_WHEEL, message: "FASTEN WHEEL" },
            });

            apiClient.wheelAction(stateApi.data).then((response) => {
                if (response.code) {
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: { task: LIFT_CAR, message: response.message },
                    });
                } else {
                    console.log(response);
                    dispatchCar({ type: "FETCH_FINISH", payload: response });
                    /*CLEAN MECHANIC*/
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: {
                            task: LIFT_CAR,
                            message: "THE WHEEL IS FASTEN",
                        },
                    });
                    dispatchSelectedMechanic({ type: "MECHANIC_UNSELECTED" });
                }
            });
        }

        if (stateApi.api === CHECK) {
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: { task: UNFASTEN_WHEEL, message: "CHECKING..." },
            });

            apiClient.check(stateApi.data).then((response) => {
                console.log(response);
                if (response.code) {
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: { task: CHECK, message: response.message },
                    });
                } else {
                    /*CLEAN MECHANIC*/
                    if (response.ready) {
                        dispatchMessageTask({
                            type: "SEND_MESSAGE",
                            payload: {
                                task: CHECK,
                                message: "THE CAR IS READY!!!",
                            },
                        });
                        setGameState({ ...getGameState, score });
                        setCurrentPage({ page: "Score" });
                    } else {
                        dispatchMessageTask({
                            type: "SEND_MESSAGE",
                            payload: {
                                task: CHECK,
                                message: "THE CAR IS NOT READY",
                            },
                        });
                        dispatchSelectedMechanic({
                            type: "MECHANIC_UNSELECTED",
                        });
                    }
                }
            });
        }
    }, [stateApi.data]);

    const isJackmanRules = (props) => {
        const { car, mechanic } = props;
        let isValid = false;
        if (
            WHEEL_CHANGE_RULES[mechanic.role].indexOf(car.wheel.status) !==
                -1 &&
            WHEEL_CHANGE_RULES[mechanic.role].indexOf(car.wheel.position) !== -1
        ) {
            console.log("puede cambiar la rueda");
        } else {
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: {
                    task: LIFT_CAR,
                    message: "NEED MECHANIC LOOSE THE WHEEL",
                },
            });
        }
        return isValid;
    };

    const fillTankTask = (stateTask, stateCar) => {
        if (stateCar.fuel === 100) {
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: {
                    task: LIFT_CAR,
                    message: "Sorry...Boss, the tank is Full",
                },
            });
            setScore((prevSocre) => prevSocre - 10);
        } else if (FUEL !== stateTask.droppedin) {
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: {
                    task: LIFT_CAR,
                    message: "Sorry...Boss, position incorrect...",
                },
            });
            setScore((prevSocre) => prevSocre - 10);
        } else {
            const data = {
                carId: stateTask.car.carId,
                mechanicId: stateTask.mechanic.id,
            };

            dispatchApi({ type: FILL_TANK, payload: { data } });
        }
    };

    const canLift = (lifted, task) => {
        let canLift = false;
        if (
            LIFT_RULES[task.mechanic.role].indexOf(lifted) !== -1 &&
            LIFT_RULES[task.mechanic.role].indexOf(task.droppedin) !== -1
        ) {
            canLift = true;
        }
        return canLift;
    };

    const liftTask = (task) => {
        /*VERIFY BY REAL STAtUS CAR*/
        if (!canLift(stateCar.lifted, task)) {
            dispatchMessageTask({
                type: "SEND_MESSAGE",
                payload: {
                    task: LIFT_CAR,
                    message:
                        "Sorry...Boss, position incorrect or car is lifted",
                },
            });
            setScore((prevSocre) => prevSocre - 10);
            return;
        } else {
            const data = {
                carId: stateTask.car.carId,
                mechanicId: stateTask.mechanic.id,
            };
            dispatchApi({ type: LIFT_CAR, payload: { data } });
        }
    };

    const wheelTask = (task) => {
        const data = {
            carId: stateTask.car.carId,
            mechanicId: stateTask.mechanic.id,
            position: stateTask.droppedin,
            action: stateTask.task,
        };
        dispatchApi({ type: task.task, payload: { data } });
    };

    const checkTask = (task) => {
        const data = {
            carId: stateTask.car.carId,
        };
        dispatchApi({ type: task.task, payload: { data } });
    };

    const verifyLiftedAndPosistionWheel = (task, stateCar) => {
        let isChange = false;

        if (
            WHEEL_POSITIONS.indexOf(task.droppedin) !== -1 &&
            WHEEL_CHANGE_RULES[task.mechanic.role].indexOf(stateCar.lifted) !==
                -1
        ) {
            isChange = true;
        }
        return isChange;
    };

    const verifyWheelTaskRules = (task, stateCar) => {
        let isChange = false;
        if (WHEEL_TASK_RULES[task.task].indexOf(task.car.wheel.status) !== -1) {
            isChange = true;
        }
        return isChange;
    };

    useEffect(() => {
        if (!stateTask) return;
        //console.log(stateTask);
        if (LIFT_CAR === stateTask.task) {
            liftTask(stateTask);
        }
        if (FILL_TANK === stateTask.task) {
            fillTankTask(stateTask, stateCar);
        }
        if (WHEEL_ACTIONS.indexOf(stateTask.task) !== -1) {
            /*VERIFY STATUS AND POSITION*/
            if (!verifyLiftedAndPosistionWheel(stateTask, stateCar)) {
                dispatchMessageTask({
                    type: "SEND_MESSAGE",
                    payload: {
                        task: LIFT_CAR,
                        message:
                            "Sorry... Boss, the car is not lifted or invalid position",
                    },
                });
                setScore((prevSocre) => prevSocre - 10);
                return;
            } else {
                /*VERIFY WHEEL TASK RULES*/
                if (!verifyWheelTaskRules(stateTask, stateCar)) {
                    dispatchMessageTask({
                        type: "SEND_MESSAGE",
                        payload: {
                            task: LIFT_CAR,
                            message: "Sorry... Boss, try other action",
                        },
                    });
                    setScore((prevSocre) => prevSocre - 10);
                    return;
                } else {
                    wheelTask(stateTask);
                }
            }
        }
        if (CHECK === stateTask.task) {
            checkTask(stateTask);
        }
        return;
    }, [stateTask]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <section
                        className={`page-section text-white mb-0 pt-0 pb-0`}
                    >
                        <div className="container">
                            <h4 className="text-center text-uppercase text-secondary mb-2">
                                Your performance: {score} / 100
                            </h4>
                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon">
                                    <svg
                                        className="svg-inline--fa fa-star fa-w-18"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="divider-custom-line"></div>
                            </div>
                        </div>
                    </section>
                </div>
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
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Boxes);
