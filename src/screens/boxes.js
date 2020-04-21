import React, { useState, useEffect } from "react";
import apiClient from "./../apiClient";
import Car from "./../layout/Car";
import MechanicList from "../components/Mechanics/MechanicList";
import SelectedMechanic from "./../components/Mechanics/SelectedMechanic";
//const Car = (props) => <Grid id={props.id} />;

const Boxes = (props) => {
    const{getGameState} = props;
    const{team} = getGameState;
    
    
    // const { display, getGameState, setGameState } = props;
    const [mechanicDropped, setMechanicDropped] = useState(null);
    const [selectedMechanic, setselectedMechanic] = useState(null);
    const [mechanicAction, setMechanicAction] = useState(null);
    const [getCar, setCar] = useState(null);
    
    useEffect(() => {
        if(!team) return;
        apiClient.createCar().then((car)=>setCar(car));
        console.log("busco El auto");
    }, [team]);
   
    useEffect(()=>{
        setselectedMechanic(mechanicDropped);
    },[mechanicDropped]);
    
    useEffect(()=>{
        if(!mechanicAction) return;
        apiClient.liftCar(mechanicAction.carid,mechanicAction.mechanicid).then((car)=>setCar(car));
    },[mechanicAction, setMechanicAction]);


    if(!team || !getCar){
        return null;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <Car id={getCar.id} car={getCar} setCar={setCar} setMechanicDropped={setMechanicDropped}/>
                        <MechanicList items={team.members} carid={getCar.id} car={getCar} setMechanicAction={setMechanicAction}/>
a                    </div>
                </div>
                <div className="col-md-3">
                    {selectedMechanic && <SelectedMechanic selectedMechanic={selectedMechanic} setMechanicAction={setMechanicAction} car={getCar}/> }
                </div>
            </div>
        </div>
    );
};

export default Boxes;
