import React, { useState, useEffect } from "react";
import apiClient from "./../apiClient";
import Layout from "./../layout/Layout";
import Header from "./../components/Header";
import Car from "./../layout/Car";
import Sidebar from "./../layout/Sidebar";
import MechanicList from "./../components/MechanicList";
import SelectedMechanic from "./../components/SelectedMechanic";
//const Car = (props) => <Grid id={props.id} />;

const Boxes = (props) => {
    const{getGameState} = props;
    const{team} = getGameState;
    
    
    // const { display, getGameState, setGameState } = props;
    const [mechanicDropped, setMechanicDropped] = useState(null);
    const [selectedMechanic, setselectedMechanic] = useState(null);
    const [getCar, setCar] = useState(null);
    
    useEffect(() => {
        if(!team) return;
        apiClient.createCar().then((car)=>setCar(car));
    }, [team]);
   
    useEffect(()=>{
        setselectedMechanic(mechanicDropped);
    },[mechanicDropped]);

    if(!team || !getCar){
        return null;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <Car id={getCar.id} car={getCar} setMechanicDropped={setMechanicDropped}/>
                        <MechanicList items={team.members} />
a                    </div>
                </div>
                <div className="col-md-3">
                    {selectedMechanic && <SelectedMechanic selectedMechanic={selectedMechanic}/> }
                </div>
            </div>
        </div>
    );
};

export default Boxes;
