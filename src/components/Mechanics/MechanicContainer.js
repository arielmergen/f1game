import React,{useState} from 'react';

import DraggeableCard from './../DragDrop/DraggeableCard';


import mechanic1Img from "./../../img/male5.png";
import mechanic3Img from "./../../img/female2.png";

const WOMEN_NAMES = ["Julia", "Denise"];
const getMechanic = (name) => (WOMEN_NAMES.indexOf(name) !== -1 ? mechanic3Img : mechanic1Img);

const MechanicContainer = props => {
    // const { items, setSelectedMechanic } = props;
    // const [isDragging, setisDragging] = useState(null);
    const{team, dispatchSelectedMechanic}=props;
    // console.log(team);MECHANIC_SELECTED
    return(
        <div className="card-group">
            {
                team.members.map(member=>(
                <DraggeableCard dispatchSelectedMechanic={dispatchSelectedMechanic} member={{...member,image:getMechanic(member.name)}}>
                    <h5 className="card-header text-center text-white bg-danger">{member.name}</h5>
                    <img src={getMechanic(member.name)} className="card-img-top" alt={member.name} />
                    <div className="card-body">
                            <h5 className="card-title text-center">{member.role}</h5>
                            <p className="text-center">Position: {member.position ? member.position : 'none'}</p>
                            {member.id}
                    </div>
                </DraggeableCard>)
                )
            }  
        </div>
    )
    // if (Object.keys(team)) {
    //     return(
    //         <div className="card-group">
    //             {Object.keys(items).map((key) => (
    //                 <DraggeableCard
    //                     key={items[key].id}
    //                     id={items[key].id}
    //                     name={items[key].name}
    //                     role={items[key].role}
    //                     dataitem={items[key]}
    //                     position={items[key].position}
    //                     dropeffect="link"
    //                     isDragging={isDragging}
    //                     setisDragging={setisDragging}
    //                     onClick={() => setSelectedMechanic(items[key])}
    //                 >
                        // <h5 className="card-header text-center text-white bg-danger">{items[key].name}</h5>
                        // <img src={getMechanic(items[key].name)} className="card-img-top" alt={items[key].name} />
                        // <div className="card-body">
                        //     <h5 className="card-title text-center">{items[key].role}</h5>
                        //     <p className="text-center">Position: {items[key].position ? items[key].position : 'none'}</p>
                        //     {items[key].id}
                        // </div>
    //                 </DraggeableCard>
    //             ))
    //             }
    //         </div>
    //     );
    // }
};

export default MechanicContainer;