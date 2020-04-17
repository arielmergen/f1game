import React, { useState } from "react";
import jackman from "./../img/male2.png";


const Menu = ({getState}) =>{
  const{item,display}=getState;
return(
<div className={`card ${!display ? 'd-none' :''} `}>
  <img className="card-img-top" src={item.image} alt="Card image cap" />
  <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" className="btn btn-dark">Remove wheel</button>
    <button type="button" className="btn btn-dark">Lifting the car</button>
    <button type="button" className="btn btn-dark">IS all Ok</button>
  </div>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">He is in charge of lifting the car as soon as it reaches the pits.</p>
    <p className="card-text">It is also responsible for removing the right front wheel once it has been loosened by the technicians.</p>
    <p className="card-text">It’s the one that validates that everything is ok so that the car can get out of the pits.</p>
  </div>
</div>
)
};

export default Menu;