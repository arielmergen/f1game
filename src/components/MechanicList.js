import React, { useState, useRef, useEffect }  from 'react';
import Mechanic from './Mechanics';
import jackman from "./../img/male2.png";
import gasman from "./../img/male1.png";
import mechanic1 from "./../img/male5.png";
import mechanic2 from "./../img/male2.png";
import mechanic3 from "./../img/female2.png";


const items = {
  "id": "5ddec37b4c9e990012073013",
  "name": "Stimpy",
  "members": [
    {
      "id": "5deac754a352ca0123bf3c27",
      "name": "Jose",
      "role": "jackman"
    },
    {
      "id": "5deac754a352ca0123bf3c26",
      "name": "Santiago",
      "role": "mechanic"
    },
    {
      "id": "5deac754a352ca0123bf3c25",
      "name": "Alejandro",
      "role": "mechanic"
    },
    {
      "id": "5deac754a352ca0123bf3c24",
      "name": "Denise",
      "role": "mechanic"
    },
    {
      "id": "5deac754a352ca0123bf3c23",
      "name": "Hernan",
      "role": "gasman"
    }
  ]
}

const MechanicsList = props =>{
const{getState,setState, items}=props;
console.log(items);
  const startDrag = ev => {

    //   const dataitem = {
    //     id:ev.currentTarget.getAttribute('dataid'),
    //     name:ev.currentTarget.getAttribute('dataname'),
    //     role:ev.currentTarget.getAttribute('datarole'),
    //     image:ev.currentTarget.getAttribute('dragimage')
    //   };

    //   props.setState({
    //     ...props.getState,
    //     item:dataitem,
    //   isDragging:true
    // });

      ev.dataTransfer.effectAllowed = ev.currentTarget.getAttribute('dropeffect');

   }

  const dragEnd = () => props.setState({...props.getState,
    isDragging:false
  });
    return(
        <Mechanic>
            {console.log(items)}
            {items.map(item => (
                <li
                key={item.name} 
                dataid={item.id}
                dragimage={jackman}
                dataname={item.name}
                datarole={item.role}
                dataitem={item}
                dropeffect="link"
                draggable
                onDragStart={startDrag} 
                onDragEnd={dragEnd}
                >
                    <p>{item.name}</p>
                    <p>{item.role}</p>
                    <img src={(item.name==='Julia'|| item.name==='Denise') ? mechanic3 : jackman} width="139" height="139"/>
                    <div className="btn-group-vertical d-none" role="group" aria-label="Vertical button group">
                        <button type="button" className="btn btn-dark">Remove wheel</button>
                        <button type="button" className="btn btn-dark">Lifting the car</button>
                        <button type="button" className="btn btn-dark">IS all Ok</button>
                    </div>
                </li>
            ))
            }
        </Mechanic>
    );
}

export default MechanicsList;