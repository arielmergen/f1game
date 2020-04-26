import React, { useState, useReducer, useEffect, useCallback } from "react";

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {LIFT_CAR, UNFASTEN_WHEEL,CHANGE_WHEEL,FASTEN_WHEEL,FILL_TANK} from "../../constants";

import ActionsForm from "./ActionsForm";

const PROCESSING = 'Processing..'
const UNFASTEN_WHEEL_MESSAGE = 'Wheel is UnFasten'
const FASTEN_WHEEL_MESSAGE = 'Wheel is Fasten'
const CHANGE_WHEEL_MESSAGE ='The wheel has been changed...';
const FILL_TANK_MESSAGE = 'Full tank'
const LIFT_CAR_LIFT_MESSAGE = 'Lifting the car';

toast.configure();



const SelectedMechanic = (props) => {
    const { selectedMechanic, dispatchTask, stateMessageTask } = props;
    const {id, name, role, droppedin } = selectedMechanic;

    const [mechanicWasSelected, setmechanicWasSelected] = useState(false);

useEffect(()=>{
    if(selectedMechanic && selectedMechanic.selected){
        setmechanicWasSelected(true);
    }
    return()=>{
        setmechanicWasSelected(true);
    }
},[selectedMechanic, selectedMechanic.selected])

useEffect(()=>{
    console.log(stateMessageTask);
    if(stateMessageTask.code===1024||
        stateMessageTask.code===6||
        stateMessageTask.code===12 ||
        stateMessageTask.code===13 || 
        stateMessageTask.code===14 ||
        stateMessageTask.code===18
        ){
        toast.error(stateMessageTask.message, {
            position: toast.POSITION.TOP_RIGHT
        });
        return;
    }
    if(stateMessageTask.task && !stateMessageTask.isFinish){
        toast.info(PROCESSING, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    if(stateMessageTask.task===LIFT_CAR && stateMessageTask.isFinish){
            toast.success(LIFT_CAR_LIFT_MESSAGE, {
                position: toast.POSITION.TOP_RIGHT
            });
    }
    
    if(stateMessageTask.isFinish && stateMessageTask.task===UNFASTEN_WHEEL){
        toast.success(UNFASTEN_WHEEL_MESSAGE, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    if(stateMessageTask.isFinish && stateMessageTask.task===FASTEN_WHEEL){
        toast.success(FASTEN_WHEEL_MESSAGE, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    if(stateMessageTask.isFinish && stateMessageTask.task===CHANGE_WHEEL){
        toast.success(CHANGE_WHEEL_MESSAGE, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    if(stateMessageTask.isFinish && stateMessageTask.task===FILL_TANK){
        toast.success(FILL_TANK_MESSAGE, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
},[stateMessageTask])

    return (
    <>
         {mechanicWasSelected && (<div className="card border-danger text-white bg-danger">
            <h5 className="card-header text-center text-white bg-danger">{name} - {role}</h5>
            <div className="card-body">
                <ActionsForm
                    role={role}
                    dispatchTask={dispatchTask}
                    selectedMechanic={selectedMechanic}
                />
                 {droppedin.position && <p>Position: {droppedin.position ? droppedin.position : 'none'}</p>}
            </div>
        </div>)}
    </>
    )
};

export default React.memo(SelectedMechanic);
