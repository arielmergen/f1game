import React, { useState, useRef, useEffect }  from 'react';
import Mechanics from './Mechanics';
import Mechanic from './Mechanic';
import jackman from "./../img/male2.png";
import gasman from "./../img/male1.png";
import mechanic1 from "./../img/male5.png";
import mechanic2 from "./../img/male2.png";
import mechanic3 from "./../img/female2.png";

const draggingStyle = {
  opacity: 0.25,
};


const MechanicsList = props =>{
const{getState,setState, items=[], isDragging}=props;
    if(items){
      return(
        <div className="mechanics" style={isDragging ? draggingStyle : {} } >
          <ul className="mechanic"  >
            {items.map(item => (
             <Mechanic 
                key={item.id} 
                dataitem={item} 
                dropeffect="link"
                getState={getState}
                setState={setState}
            >
                <p>{item.name}</p>
                <p>{item.role}</p>
                <img src={item.image=(item.name==='Julia'|| item.name==='Denise') ? mechanic3 : jackman} width="139" height="139"/>
                <div className="btn-group-vertical d-none" role="group" aria-label="Vertical button group">
                <button type="button" className="btn btn-dark">Remove wheel</button>
                <button type="button" className="btn btn-dark">Lifting the car</button>
                <button type="button" className="btn btn-dark">IS all Ok</button>
                </div>
              </Mechanic>
            ))}
          </ul>  
        </div>
      );
    }
    return null;    
}

export default MechanicsList;