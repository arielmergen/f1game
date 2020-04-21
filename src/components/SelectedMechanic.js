import React from 'react';

const SelectedMechanic = props => {
    const{selectedMechanic}=props;
    const{id, image, name, role}=selectedMechanic;
    return(
        <div className="card border-danger" data-toggle="modal" data-target="#portfolioModal3">
            <h5 class="card-header text-center text-white bg-danger">
                {name}
            </h5>
            <img className="card-img-top img-fluid mt-2" src={image} alt={name} />
            <div className="card-body">
                <h5 class="card-title text-center">{role}</h5>
                {/* <p>{id}</p> */}
                <button type="button" className="btn btn-dark">
                                    Remove wheel
                </button>
                <button type="button" className="btn btn-dark">
                                    Lifting the car
                </button>
                <button type="button" className="btn btn-dark">
                                    IS all Ok
                </button>
            </div>
        </div>
    );
}


export default SelectedMechanic;