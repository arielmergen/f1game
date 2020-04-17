import React,{useState} from 'react';
import Intro from './../screens/intro';
import Boxes from './../screens/boxes';
import Score from './../screens/score';
import './../css/styles.css';
const RenderIfNeeded = props => {
    let page;
    switch(props.getCurrentPage.page){
        case 'Intro':
            page = <Intro {...{props}}/>
        break;
        case 'Boxes':
            page = <Boxes {...{props}}/>
        break;
        case 'Score':
            page = <Score {...{props}}/>
        break;
        default:  page = <Intro {...{props}}/>;
        
    }
    return page;
};

const Index = props => {
    const intialCurrentPage ={
        page:'Intro'
    }
    const initialUserState = {
        name:''
    };
    const initialState={
        item:{
            display:false,
            image:"",
            isDragging:false
        }
    };
    const[getState,setState] = useState(initialState);
    const[getUserState,setUserState] = useState(initialUserState);  
    const[getCurrentPage,setCurrentPage] = useState(intialCurrentPage);  
    return(
        <>
            {<RenderIfNeeded 
                getState={ getState }
                setState={ setState }
                getUserState={ getUserState }
                setUserState={ setUserState }
                getCurrentPage={ getCurrentPage }
                setCurrentPage={ setCurrentPage }
            />}
        </>
    )
}

export default Index;