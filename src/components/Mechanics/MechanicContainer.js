import React,{useState} from 'react';

import DraggeableCard from './../DragDrop/DraggeableCard';


import mechanic1Img from "./../../img/male5.png";
import mechanic3Img from "./../../img/female2.png";

const WOMEN_NAMES = ["Julia", "Denise"];
const getMechanic = (name) => (WOMEN_NAMES.indexOf(name) !== -1 ? mechanic3Img : mechanic1Img);

const MechanicContainer = props => {

    const{team, positionActive, dispatchSelectedMechanic, stateMechanicSelected}=props;

    return(
        <div className="card-group">
            {
                team.members.map(member=>(
                <DraggeableCard 
                key={member.id} 
                dispatchSelectedMechanic={dispatchSelectedMechanic} 
                stateMechanicSelected={stateMechanicSelected} 
                member={{...member,image:getMechanic(member.name)}}
                positionActive={positionActive}
                >
                    <h6 className="card-header text-center text-white bg-danger">{member.name}</h6>
                    <img src={getMechanic(member.name)} className="card-img-top card-mechanic" alt={member.name} draggable="false"/>
                    <div className="card-body">
                        <h6 className="card-title text-center">{member.role}</h6>
                    </div>
                </DraggeableCard>)
                )
            }  
        </div>
    )
};

export default MechanicContainer;