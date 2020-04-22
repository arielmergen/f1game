import React, { useEffect, useState } from "react";

import ActionsForm from "./ActionsForm";

const SelectedMechanic = (props) => {
    const { selectedMechanic, setMechanicAction } = props;
    const { id, image, name, role, position = null } = selectedMechanic;
    return (
        <div className="card border-danger">
            <h5 className="card-header text-center text-white bg-danger">{name}</h5>
            <img className="card-img-top img-fluid mt-2" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title text-center">{role}</h5>
                <ActionsForm
                    setMechanicAction={setMechanicAction}
                    role={role}
                />
                <p>Position: {position ? position : 'none'}</p>
            </div>
        </div>
    );
};

export default SelectedMechanic;
