import React, { useState, useEffect, useCallback, useReducer } from "react";

import apiClient from "./../apiClient";
//import { MECHANIC_PLACE_RULES, WHEEL_ACTIONS, WHEEL_POSITIONS, FILL_TANK, LIFT_CAR, JACKMAN } from "../constants";
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
} from "../constants";

import Car from "./../layout/Car";

import MechanicContainer from "../components/Mechanics/MechanicContainer";
import SelectedMechanic from "./../components/Mechanics/SelectedMechanic";


const initialStateTask = {
    isActive:false,
    droppedin:'',
    task:'',
    mechanic:{}

}
const reducerTask = (state, action) =>{
    switch(action.type){
        case LIFT_CAR:
            return{
                isActive:true,
                droppedin:action.payload.droppedin,
                task:action.type,
                mechanic:{
                    id:action.payload.id,
                    role:action.payload.role
                }
           }
        case GAS_MAN_ACTIONS:
            return{
                isFinish:false,
                task:'',
                mechanic:{}
            }
        case MECHANIC_ACTIONS:
            return{
                isFinish:true,
                task:'',
                mechanic:{}
            }
        case MECHANIC_ACTIONS:
                return{
                    isFinish:true,
                    task:'',
                    mechanic:{}
                   }
        case 'FETCH_TASK_START':
            return{
                isFinish:false,
                task:LIFT_CAR
            }
            case 'FETCH_TASK_END':
                return{
                    isFinish:true,
                    task:LIFT_CAR
                }
    }
}

const initialStateTeam = {
    loading:true,
    id:'',
    name:'',
    members:[]
}
const reducerTeam = (state, action) =>{
    switch(action.type){
        case 'FETCH_START':
            return{
                loading:true,
                id:'',
                name:'',
                members:[]
            }
        case 'FETCH_FINISH':
            return{
                loading:false,
                id:action.payload.id,
                name:action.payload.name,
                members:action.payload.members,
           }
        
    }
}

const initialStateCar ={
    loading:true,
    id:'',
    fuel:0,
    lifted:false,
    wheels:[],
}
const reducerCar = (state, action) =>{
    switch(action.type){
        case 'FETCH_START':
            return{
                loading:true,
                id:'',
                fuel:0,
                lifted:false,
                wheels:[],
            }
        case 'FETCH_FINISH':
            return{
                loading:false,
                id:action.payload.id,
                fuel:action.payload.fuel,
                lifted:action.payload.lifted,
                wheels:action.payload.wheels,
           }
        
    }
}

const initialStateMechanicSelected = {
    loading:true,
    id:'',
    name:'',
    rol:'',
    droppedin:{}
}

const reducerSelectedMechanic = (state, action) =>{
    switch(action.type){
        case 'MECHANIC_SELECTED':
        return{
            selected:true,
            id:action.payload.mechanic.id,
            name:action.payload.mechanic.name,
            role:action.payload.mechanic.role,
            droppedin:action.payload.droppedin.position
        }
    case 'MECHANIC_UNSELECTED':
        return{
            selected:false,
            id:'',
            name:'',
            rol:'',
            droppedin:{}
        }
    default: return state;
    }
}




const Boxes = (props) => {
    const { getGameState } = props;
 
    const[stateTask, dispatchTask] = useReducer(reducerTask,initialStateTask);
    const[stateCar, dispatchCar] = useReducer(reducerCar,initialStateCar);
    const[stateTeam, dispatchTeam] = useReducer(reducerTeam,initialStateTeam);
    const[stateMechanicSelected, dispatchSelectedMechanic] =useReducer(reducerSelectedMechanic, initialStateMechanicSelected);
    const[isLoadingPage, setisLoadingPage] = useState(false);
    const { team } = getGameState;

    const [getInternalPositionTeam, setInternalPositionTeam] = useState(
        // TODO: remove duplicated id key in the reduced object
        team.members.reduce((obj, member) => ({ ...obj, [member.id]: member }), {})
    );
 
    useEffect(() => {
        dispatchCar({type:'FETCH_START'});
        apiClient.createCar().then((car) => {
            dispatchCar({type:'FETCH_FINISH',payload:car});
        });
    }, []);


    useEffect(()=>{
        if(!stateCar.loading){
            setisLoadingPage(true);
        }
    },[stateCar,stateCar.loading])    


    useEffect(()=>{
        if(stateTask && stateTask.isActive){
            if(stateTask.task === LIFT_CAR){
                dispatchCar({type:'FETCH_START'});
                dispatchTask({type:'FETCH_TASK_START'});
                const data = {
                    carId:stateCar.id,
                    mechanicId:stateTask.mechanic.id,
                }
                apiClient.liftCar(data)
                .then(response=>{
                    dispatchTask({type:'FETCH_TASK_END'});
                    dispatchCar({type:'FETCH_FINISH',payload:response});
                })
            }
        }
        // if (LIFT_CAR === getMechanicAction) {
        //     dispatchTask({type:'TASK_START',payload:getMechanicAction});
        //     actionPromise = apiClient.liftCar(data);
        // }

    },[stateTask]);

    // drag and drop validation and tracking positions
    // useEffect(() => {
    //     if (!getMechanicDropped) return;

    //     const {
    //         areaData: { position },
    //         itemData,
    //     } = getMechanicDropped;

    //     if (!getCar.lifted && itemData.role !== JACKMAN) {
    //         setError("This is not his/her role for lift the Car");
    //         return 
    //     }
        
    //     local auxiliar validations
    //     if (getInternalPositionTeam[itemData.id].position) {
    //         setError(itemData.name + " is already busy");
    //         return
    //     }

    //     for (let [key, value] of Object.entries(getInternalPositionTeam)) {
    //         if(value.position && value.position === position) {
    //             setError(itemData.name + " can not do that job because another partner is working at " + position);
    //             return
    //         }
    //     }

    //     if (MECHANIC_PLACE_RULES[position].indexOf(itemData.role) === -1) {
    //         setError(itemData.name + " it does not must be in that position");
    //         return
    //     }

    //     track which mechanic is
    //     const newMechanicPosition = { ...itemData, position }
    //     setInternalPositionTeam({
    //         ...getInternalPositionTeam,
    //         [itemData.id]: newMechanicPosition,
    //     });
        
    //     setSelectedMechanic(newMechanicPosition);
    // }, [getMechanicDropped]);

    // handle team actions
    // useEffect(() => {
    //     TODO:This validation prevent call same action again
    //     if (!getMechanicAction) return;
    //     const data = { mechanicId: selectedMechanic.id, carId: getCar.id };
    //     const { position } = getInternalPositionTeam[selectedMechanic.id];

    //     let actionPromise = null;

    //     if (!getCar.lifted && LIFT_CAR !== getMechanicAction) {
    //         setError("First, lift the Car");
    //         return
    //     }

    //     start api actions


        // if (LIFT_CAR === getMechanicAction) {
        //     dispatchTask({type:'TASK_START',payload:getMechanicAction});
        //     actionPromise = apiClient.liftCar(data);
        // }

    //     if (WHEEL_POSITIONS.indexOf(position) !== -1 && WHEEL_ACTIONS.indexOf(getMechanicAction) !== -1) {
    //         dispatchTask({type:'TASK_START',payload:getMechanicAction});
    //         actionPromise = apiClient.wheelAction({ ...data, position, action: getMechanicAction });
    //     }

    //     if (FILL_TANK === getMechanicAction) {
    //         dispatchTask({type:'TASK_START',payload:getMechanicAction});
    //         actionPromise = apiClient.fillTank(data);
    //     }

    //     if (!actionPromise) {
    //         setLoading(false);
    //         setError("No action enable for the sector");
    //         return
    //     }

    //     actionPromise
    //         .then((newCarState) => {
    //             setCar(newCarState);
    //             dispatch({type:'TASK_FINISH',payload:getMechanicAction});
    //         })
    //         .catch((err) => setError(err));
    // }, [getMechanicAction]);
  

    return (
        <div className="container">
            <div className="row">
                <div className="col-9 mb-2">
                    { isLoadingPage && (
                    <Car
                        car={stateCar}
                        dispatchSelectedMechanic={dispatchSelectedMechanic}
                    />
                    )}
                </div>
                
                <div className="col-3">
                    {stateMechanicSelected && (
                        <SelectedMechanic 
                        selectedMechanic={stateMechanicSelected}
                        dispatchTask={dispatchTask}
                        task={stateTask}
                        />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    {stateCar && <MechanicContainer team={team} />}
                 </div>
            </div> 
        </div>
    );
};

export default Boxes;
