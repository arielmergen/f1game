import React, {useState, useEffect} from "react";
import DragAreaWheel from '../components/wheel/DropAreaWheel';
import DragAreaFront from '../components/Front/DropAreaFront';
import './../css/grid.css';



const insideStyle = {
    backgroundColor: "#cccccc",
    opacity: 0.5,
};
const Car = props =>{
    const{setMechanicDropped, id, car, setCar}=props;
    console.log("Car",car);
    const[getState, setState] = useState({});
    const[lifted, setLifted] = useState(false);
    useEffect(()=>{
        setLifted(car.lifted)
    },[lifted,setLifted]);
   return(
        <div id={id} className={`car grid ${car.lifted ? 'car-lifted' : ''} `}>
            {/*Create all Whhels*/}
            {car.wheels.map((wheel)=>(
                <DragAreaWheel key={wheel.position} 
                position={wheel.position} 
                statusWhweel={wheel.status} 
                getState={getState} 
                setState={setState}
                setMechanicDropped={setMechanicDropped} 
                style={{...(getState.isOver ? insideStyle : {}) }} 
                className={wheel.position}>
                </DragAreaWheel>
            ))}
               <DragAreaFront 
               id={id} 
               lifted={lifted} 
               setLifted={setLifted}
               getState={getState} 
               setState={setState}
               setMechanicDropped={setMechanicDropped}
               className="front">
               </DragAreaFront>
        </div>
    )
}

export default Car;