import React from 'react';
import JackManActions from './ActionsJackMan';
import MechanicActions from './ActionsMechanic';
const Actions = props => {
    const {setMechanicAction, role, mechanicid, carid} = props;
   return(
       <>
        {role==='jackman'&&(<JackManActions mechanicid={mechanicid} carid={carid} setMechanicAction={setMechanicAction}/>)}
        {role==='mechanic'&&(<MechanicActions mechanicid={mechanicid} carid={carid} setMechanicAction={setMechanicAction}/>)}
      </>
    );
};

export default Actions;