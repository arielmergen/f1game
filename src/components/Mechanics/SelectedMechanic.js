import React, { useReducer, useEffect } from "react";

import {LIFT_CAR, UNFASTEN_WHEEL,CHANGE_WHEEL,FASTEN_WHEEL} from "../../constants";

import ActionsForm from "./ActionsForm";

const PROCESSING = 'Processing..'
const UNFASTEN_WHEEL_MESSAGE = 'Wheel is UnFasten'
const FASTEN_WHEEL_MESSAGE = 'Wheel is Fasten'
const CHANGE_WHEEL_MESSAGE ='The wheel has been changed...';
const WHEEL_UNFASTEN_MESSAGE = 'The wheel is being loosened...';
const WHEEL_LOOSE_MESSAGE = 'The wheel is loose';
const LIFT_CAR_LIFT_MESSAGE = 'Lifting the car';
const LIFT_CAR_LIFTED_MESSAGE = 'The Car is Lifted';


const messageByAction = (action, isActive) =>{
    console.log(action);
    let message;
    if(action===LIFT_CAR){
        message = isActive ? LIFT_CAR_LIFTED_MESSAGE : LIFT_CAR_LIFT_MESSAGE;
    }
    if(action===UNFASTEN_WHEEL){
        
        message = isActive ? WHEEL_LOOSE_MESSAGE : WHEEL_UNFASTEN_MESSAGE;
    }
    if(action===CHANGE_WHEEL){
        message = isActive ? CHANGE_WHEEL_MESSAGE : PROCESSING;
    }
    if(action===FASTEN_WHEEL){
        message = isActive ? FASTEN_WHEEL_MESSAGE : PROCESSING;
    }
    return message;
}


const initialState ={
    message:''
}


const reducer = (state,action) =>{


    switch(action.type){
        case LIFT_CAR:
            return {message:LIFT_CAR_LIFT_MESSAGE}
        case UNFASTEN_WHEEL:
            return {message: UNFASTEN_WHEEL_MESSAGE}
        case CHANGE_WHEEL:
            return {message:CHANGE_WHEEL_MESSAGE}
        case FASTEN_WHEEL:
            return {message:FASTEN_WHEEL_MESSAGE}
        case 'PROCESSING':
            return {message:PROCESSING}
        default : return state;
    }
}


const DisplayAction = (props) =>{
    const {isActive, task} = props;
console.log(task);
    

return(<p>{messageByAction(isActive, task.task)}</p>);
    // if(action){
       
    //     return(
    //         <div className={`alert ${action[getMechanicAction] && action[getMechanicAction].isFinish ? 'alert-success' : 'alert-warning'}`} role="alert">
    //             {
    //                 dispatch({type:getMechanicAction})
    //             }
    //             {/* {action[getMechanicAction] && action[getMechanicAction].isFinish ? LIFT_CAR_LIFTED : 'Processing...'} */}
    //             {messageByAction(action)}
    //         </div>
    //     );
    // }else{
    //     return null;
    // }
    
}




const SelectedMechanic = (props) => {
    const { selectedMechanic, dispatchTask, task } = props;
    const {id, name, role, droppedin:position, selected } = selectedMechanic;
    if(!selected){
        return null;
    }
    return (
        <div className="card border-danger">
            <h5 className="card-header text-center text-white bg-danger"></h5>
            <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
                    {/* {action && Object.keys(action).length > 0 && <DisplayAction action={action} getMechanicAction={getMechanicAction}/>} */}
                    {<DisplayAction task={task}/>}
                <ActionsForm
                    role={role}
                    dispatchTask={dispatchTask}
                    selectedMechanic={selectedMechanic}
                />
                
                 <p>Position: {position ? position : 'none'}</p>
            </div>
        </div>
    );
};

export default SelectedMechanic;
