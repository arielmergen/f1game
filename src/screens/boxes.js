import React,{useState,useEffect} from 'react';
import Layout from './../layout/Layout';
import Header from './../components/Header';
import Grid from './../layout/Grid';
import Sidebar from './../layout/Sidebar';
import MechanicList from './../components/MechanicList';
const Boxes = ({props}) =>{
    const{getState, setState,getUserState,getCurrentPage} = props;
    const[getLoading, setLoading] =useState(true);
    const[getLoadingData, setLoadingData] =useState(true);
    const[getData, setData] =useState({});
    const urlteam = "https://backend-test-qfxw6.stensul.dev/teams";
    const urlcar = "https://backend-test-qfxw6.stensul.dev/cars";
    useEffect(()=>{
        fetchTeam();
    },[getLoadingData]);
    const fetchTeam = async () => {
        const responseTeam = await fetch(urlteam, {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
              name: getUserState.name,
        })
    });
    const dataTeam = await responseTeam.json();
    const responseCar = await fetch(urlcar, {
        crossDomain:true,
        method: 'POST',
        headers: {'Content-Type':'application/json'},
    });
    const dataCar = await responseCar.json();
        setState({...getState,team:dataTeam,car:dataCar});
    }
    useEffect(()=>{
        if(getState.team){
            setLoading(false);
        }
    },[getState]);
    
    if(!getLoading){
        return(
            <>
            <Header getUserState={getUserState}/>
            <Layout isLoading={getLoading}>
                <div className="col-lg-9">
                <Grid 
                    getState={getState}
                    setState={setState}
                />
                <MechanicList 
                     getState={getState}
                     setState={setState}
                     items={getState.team.members || []}
                     isDragging={getState.isDragging}
                />
                </div>
                <Sidebar 
                    getUserState={getUserState}
                    getState={getState}
                    setState={setState}
                />
            </Layout>
            </>
        );
    }else{
        return(
            <>
            <Header getUserState={getUserState}/>
            <Layout isLoading={getLoading}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </Layout>
            </>
        );
    }
}

export default Boxes;