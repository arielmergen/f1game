import React from "react";

import {
    MECHANIC,
    MECHANIC_ACTIONS,
    JACKMAN,
    JACKMAN_ACTIONS,
    GAS_MAN,
    GAS_MAN_ACTIONS,
    LIFT_CAR,
    UNLIFT_CAR,
    UNFASTEN_WHEEL,
    FASTEN_WHEEL,
    CHANGE_WHEEL,
    FILL_TANK,
} from "../../constants";

const LABELS = {
    [LIFT_CAR]: "Lift",
    [UNLIFT_CAR]: "Unlift",
    [UNFASTEN_WHEEL]: "Unfasten",
    [FASTEN_WHEEL]: "Fasten",
    [CHANGE_WHEEL]: "Change",
    [FILL_TANK]: "Fill tank",
};

const ActionsForm = ({ role, setMechanicAction }) => (
    <>
        {role === MECHANIC && <Actions actions={MECHANIC_ACTIONS} setMechanicAction={setMechanicAction} />}
        {role === JACKMAN && <Actions actions={JACKMAN_ACTIONS} setMechanicAction={setMechanicAction} />}
        {role === GAS_MAN && <Actions actions={GAS_MAN_ACTIONS} setMechanicAction={setMechanicAction} />}
    </>
);

const Actions = ({ actions, setMechanicAction }) => (
    <>
        {actions.map((a) => (
            <button id="change" type="button" className="btn btn-block btn-dark" onClick={(e) => {
                e.preventDefault()
                setMechanicAction(a) 
            }}>
                {LABELS[a]}
            </button>
        ))}
    </>
);

export default ActionsForm;
