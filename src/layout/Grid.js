import React, {useState} from "react";
import DropArea from './../components/DropArea';
import './../css/grid.css';



const insideStyle = {
    backgroundColor: "#cccccc",
    opacity: 0.5,
};

const Grid = (props) =>{
    const{getState,setState} = props;
        //  ev.preventDefault();
        // fetch(urlcar, {
        //     crossDomain:true,
        //     method: 'POST',
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify({
        //       name: getUserState.name,
        //     })
        // }).then(res=>res.json())
        // .then(data=>{
        //     setState({...getState,car:data});
            
        // })

return(
    <div className="car">
        <div className="grid-top">
        <DropArea wheel="rear-right" getState={getState} setState={setState} style={{...(getState.isOver ? insideStyle : {}) }} className="rueda-trasera-derecha">
        </DropArea>
        <DropArea wheel="front-right" getState={getState} setState={setState} style={{...(getState.isOver ? insideStyle : {}) }} className="rueda-delantera-derecha">
        </DropArea>
        </div>
        <div className="grid-middle">
            <DropArea getState={getState} setState={setState} style={{...(getState.isOver ? insideStyle : {}) }} className="gas">
            </DropArea>
            <DropArea getState={getState} setState={setState} style={{...(getState.isOver ? insideStyle : {}) }} className="trompa">
            </DropArea>
        </div>
        <div className="gird-bottom">
            <DropArea wheel="rear-left" getState={getState} setState={setState} style={{...(getState.isOver ? insideStyle : {}) }} className="rueda-trasera-izquierda">
            </DropArea>
            <DropArea wheel="front-left" getState={getState} setState={setState} style={{...(getState.isOver ? insideStyle : {}) }} className="rueda-delantera-izquierda">
            </DropArea>
        </div>
    </div>
)
}

export default Grid;