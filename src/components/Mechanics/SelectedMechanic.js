import React, {useEffect, useState} from 'react';
import Actions from './Actions/Actions';
const SelectedMechanic = props => {
    const{selectedMechanic, setMechanicAction, car}=props;
    const{id, carid, image, name, role}=selectedMechanic;
    return(
        <div className="card border-danger">
            <h5 className="card-header text-center text-white bg-danger">
                {name}
            </h5>
            <img className="card-img-top img-fluid mt-2" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title text-center">{role}</h5>
                <p>MechanicID {id}</p>
                <p>carID {car.id}</p>
                <p>Lifted {`${car.lifted ? 'True' : 'False' }`}</p>
                 <Actions setMechanicAction={setMechanicAction} role={role} mechanicid={id} carid={carid} />   
            </div>
        </div>
    );
}


export default SelectedMechanic;