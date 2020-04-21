import React, {useState} from "react";
import DropArea from '../components/DropArea';
import './../css/grid.css';



const insideStyle = {
    backgroundColor: "#cccccc",
    opacity: 0.5,
};
const Car = props =>{
    const{setMechanicDropped, id, car}=props;
    const[getState, setState] = useState({});
   return(
        <div id={id} className="car grid">
            {/*Create all Whhels*/}
            {car.wheels.map((wheel)=>(
                <DropArea key={wheel.position} 
                position={wheel.position} 
                statusWhweel={wheel.position} 
                getState={getState} setState={setState}
                setMechanicDropped={setMechanicDropped} 
                style={{...(getState.isOver ? insideStyle : {}) }} 
                className={wheel.position}>
                </DropArea>
            ))}
        </div>
    )
}

export default Car;