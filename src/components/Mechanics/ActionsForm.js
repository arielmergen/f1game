import React from "react";

import {
    MECHANIC,
    MECHANIC_ACTIONS,
    JACKMAN,
    JACKMAN_ACTIONS,
    GAS_MAN,
    GAS_MAN_ACTIONS,
    LIFT_CAR,
    CHECK,
    UNFASTEN_WHEEL,
    FASTEN_WHEEL,
    CHANGE_WHEEL,
    FILL_TANK,
} from "../../constants";

const LABELS = {
    [LIFT_CAR]: "Lift",
    [CHECK]: "Check",
    [UNFASTEN_WHEEL]: "Unfasten",
    [FASTEN_WHEEL]: "Fasten",
    [CHANGE_WHEEL]: "Change",
    [FILL_TANK]: "Fill tank",
};

const executeTask = (ev, task, selectedMechanic, dispatchTask) => {
    ev.preventDefault();
    const data = {
        mechanic: selectedMechanic,
        isActive: true,
    };

    dispatchTask({ type: `${task}`, payload: { data } });
};

const Actions = ({ actions, dispatchTask, selectedMechanic }) => {
    return (
        <>
            {actions.map((a, index) => (
                <button
                    key={LABELS[a]}
                    id="change"
                    type="button"
                    className="btn btn-block btn-dark"
                    onClick={(ev) =>
                        executeTask(ev, a, selectedMechanic, dispatchTask)
                    }
                >
                    {LABELS[a]}
                </button>
            ))}
        </>
    );
};

const ActionsForm = ({ role, dispatchTask, selectedMechanic }) => (
    <>
        {role === MECHANIC && (
            <Actions
                selectedMechanic={selectedMechanic}
                actions={MECHANIC_ACTIONS}
                dispatchTask={dispatchTask}
            />
        )}
        {role === JACKMAN && (
            <Actions
                selectedMechanic={selectedMechanic}
                actions={JACKMAN_ACTIONS}
                dispatchTask={dispatchTask}
            />
        )}
        {role === GAS_MAN && (
            <Actions
                selectedMechanic={selectedMechanic}
                actions={GAS_MAN_ACTIONS}
                dispatchTask={dispatchTask}
            />
        )}
    </>
);

export default ActionsForm;
