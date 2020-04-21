import React, { useState, useRef, useEffect } from "react";
import Mechanics from "./Mechanics";
import Mechanic from "./Mechanic";
import jackman from "./../img/male2.png";
import gasman from "./../img/male1.png";
import mechanic1 from "./../img/male5.png";
import mechanic2 from "./../img/male2.png";
import mechanic3 from "./../img/female2.png";

const draggingStyle = {
    opacity: 0.25,
};

const handleHover = props =>{
    console.log(props);
}

const MechanicsList = (props) => {
    const { items = [] } = props;
    const [isDragging, setisDragging] = useState(null);
    if (items) {
        return (
            <div className="mechanics">
                <ul className={`mechanic ${isDragging ? 'draggingStyle':''}`}>
                    {items.map((item) => (
                        <Mechanic
                            key={item.id}
                            dataitem={item}
                            dropeffect="link"
                            setisDragging={setisDragging}
                        >
                            <div className="card car-mechanic border-danger" onMouseOver={handleHover}>
                                <h5 className="card-header text-center text-white bg-danger">
                                    {item.name}
                                </h5>
                                <img className="card-img-top img-fluid mt-2" src={
                                        (item.image = item.name === "Julia" || item.name === "Denise" ? mechanic3 : jackman)
                                    } alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.role}</h5>
                                </div>
                            </div>
                        </Mechanic>
                    ))}
                </ul>
            </div>
        );
    }
    return null;
};

export default MechanicsList;
