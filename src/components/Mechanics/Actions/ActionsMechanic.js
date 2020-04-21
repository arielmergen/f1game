import React from 'react';

const MechanicActions = props =>{
    const{mechanicid, carid} = props;
    console.log("MechanicActionsID",mechanicid);
    console.log("MechanicActionID-CarID",carid);
    return (
        <>
            <button type="button" className="btn btn-block btn-dark">
                Loosen the wheel
            </button>
            <button type="button" className="btn btn-block btn-dark">
                Replace the wheel
            </button>
            <button type="button" className="btn btn-block btn-dark">
                Secure the Wheel
            </button>
        </>
    );
}

export default MechanicActions;