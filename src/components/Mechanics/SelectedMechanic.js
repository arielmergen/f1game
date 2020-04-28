import React, { useState, useReducer, useEffect, useCallback } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ActionsForm from "./ActionsForm";

toast.configure();

const Msg = (props) => {
    return (
        <div className="card border-light mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        src={props.image}
                        className="card-img"
                        alt="mechanic"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">{props.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SelectedMechanic = (props) => {
    const {
        selectedMechanic,
        dispatchTask,
        stateMessageTask,
        checkStatus,
    } = props;
    const { id, name, role, image, droppedin } = selectedMechanic;

    useEffect(() => {
        let toastId = null;
        if (stateMessageTask.code !== 0 && selectedMechanic.selected) {
            toast(
                <Msg
                    message={stateMessageTask.message}
                    image={selectedMechanic.mechanic.image}
                />,
                {
                    position: toast.POSITION.TOP_RIGHT,
                }
            );
            return;
        }

        if (
            stateMessageTask.task !== "" &&
            stateMessageTask.message !== "" &&
            selectedMechanic.selected
        ) {
            toast(
                <Msg
                    message={stateMessageTask.message}
                    image={selectedMechanic.mechanic.image}
                />,
                {
                    position: toast.POSITION.TOP_RIGHT,
                }
            );
        }
    }, [stateMessageTask]);

    return (
        <>
            {selectedMechanic.selected && (
                <div className="card border-danger text-white bg-danger">
                    <h5 className="card-header text-center text-white bg-danger">
                        {selectedMechanic.mechanic.name} -{" "}
                        {selectedMechanic.mechanic.role}
                    </h5>
                    <div className="card-body">
                        <ActionsForm
                            role={role}
                            dispatchTask={dispatchTask}
                            selectedMechanic={selectedMechanic}
                        />
                        {/* {droppedin.position && (
                            <p>
                                Position:{" "}
                                {droppedin.position
                                    ? droppedin.position
                                    : "none"}
                            </p>
                        )} */}
                    </div>
                </div>
            )}
        </>
    );
};

export default React.memo(SelectedMechanic);
