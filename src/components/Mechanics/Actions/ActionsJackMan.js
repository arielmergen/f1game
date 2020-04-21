import React from 'react';


const JackManActions = props =>{
    const{setMechanicAction, mechanicid, carid} = props;
    const handleActions = ev =>{
        setMechanicAction({mechanicid,carid,action:ev.target.id});
    }
    return (
        <>
            <button id="change" type="button" className="btn btn-block btn-dark" onClick={handleActions}>
                Remove wheel
            </button>
            <button id="lift" type="button"  className="btn btn-block btn-dark" onClick={handleActions}>
                    Lifting the car
            </button>
            <button id="check" type="button" className="btn btn-block btn-dark" onClick={handleActions}>
                    Check
            </button>
        </>
    );
}

export default JackManActions;