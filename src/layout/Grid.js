import React, {useState} from "react";
import './../css/grid.css';


// const ruedaTraseraDerechaOver = (ev,props) => {
//     ev.preventDefault();
//     const droppedItem = ev.dataTransfer.getData("drag-item");
//     console.log(droppedItem);
// }
// const ruedaDelanteraDerechaOver = props => console.log("sobre rueda delantera derecha");
// const ruedaTraseraIzquierdaOver = props => console.log("sobre rueda trasera Izquierda");
// const ruedaDelanteraIzquierdaOver = props => console.log("sobre rueda delantera Izquierda");
// const gasOver = props => console.log("sobre gas");
// const trompaOver = props => console.log("sobre trompa");

// const drop= (ev) =>{
//     ev.preventDefault();
//     const droppedItem = ev.dataTransfer;
//     console.log(droppedItem);
// }

const insideStyle = {
    backgroundColor: "#cccccc",
    opacity: 0.5,
};

const Grid = (props) =>{
    const [isOver, setIsOver] = useState(false);
    const dragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = props.dropEffect;
    }
    const drop = ev => {
        props.setState({...props.getState,display:true});
        setIsOver(false);
    }

    const dragEnter = ev => {
        ev.dataTransfer.dropEffect = "link";
        setIsOver(true);
    }

    const dragLeave = () => setIsOver(false);

return(
    <div className="car">
        <div className="grid-top">
            <div className="rueda-trasera-derecha" 
                onDragOver={dragOver} 
                onDrop={drop}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                style={{...(isOver ? insideStyle : {}) }}
            >

            </div>
            {/* <div className="rueda-delantera-derecha" onDragOver={ruedaDelanteraDerechaOver}></div> */}
        </div>
        {/* <div className="grid-middle">
            <div className="gas" onDragOver={gasOver}></div>
            <div className="trompa"onDragOver={trompaOver}></div>
        </div>
        <div className="gird-bottom">
            <div className="rueda-trasera-izquierda" onDragOver={ruedaTraseraIzquierdaOver}></div>
            <div className="rueda-delantera-izquierda" onDragOver={ruedaDelanteraIzquierdaOver}></div>
        </div> */}
    </div>
)
}

export default Grid;