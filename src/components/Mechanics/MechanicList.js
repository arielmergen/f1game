import React, { useState, useRef, useEffect } from "react";

import { JACKMAN, GAS_MAN, MECHANIC } from "../../constants";

import DraggeableItem from "../DragDrop/DraggeableItem";

import jackmanImg from "./../../img/male2.png";
import gasmanImg from "./../../img/male1.png";
import mechanic1Img from "./../../img/male5.png";
import mechanic2Img from "./../../img/male2.png";
import mechanic3Img from "./../../img/female2.png";

const draggingStyle = {
    opacity: 0.25,
};

const WOMEN_NAMES = ["Julia", "Denise"];
const getMechanic = (name) => (WOMEN_NAMES.indexOf(name) !== -1 ? mechanic3Img : mechanic1Img);

const MechanicsList = (props) => {
    const { items, car, setSelectedMechanic } = props;
    const [isDragging, setisDragging] = useState(null);
    if (Object.keys(items)) {
        return (
            <div className="mechanics">
                <ul className={`mechanic ${isDragging ? "draggingStyle" : ""}`}>
                    {Object.keys(items).map((key) => (
                        <DraggeableItem
                            key={items[key].id}
                            id={items[key].id}
                            dataitem={items[key]}
                            dropeffect="link"
                            setisDragging={setisDragging}
                        >
                            <MechanicCard
                                id={items[key].id}
                                name={items[key].name}
                                role={items[key].role}
                                position={items[key].position}
                                onClick={() => setSelectedMechanic(items[key])}
                            />
                        </DraggeableItem>
                    ))}
                </ul>
            </div>
        );
    }
    return null;
};

const MechanicCard = ({ id, name, role, onClick, position = null }) => (
    <div
        id={id}
        key={id}
        className="card car-mechanic border-danger"
        onClick={position ? (e) => {
            e.preventDefault();
            onClick();
        } : () => {}}
    >
        <h5 className="card-header text-center text-white bg-danger">{name}</h5>
        <img className="card-img-top img-fluid mt-2" src={getMechanic(name)} alt={name} />
        <div className="card-body">
            <h5 className="card-title text-center">{role}</h5>
            <p className="text-center">Position: {position ? position : 'none'}</p>
        </div>
    </div>
);

export default MechanicsList;
