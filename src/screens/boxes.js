import React from 'react';
import Layout from './../layout/Layout';
import Header from './../components/Header';
import Grid from './../layout/Grid';
import Sidebar from './../layout/Sidebar';
import MechanicList from './../components/MechanicList';
const Boxes = ({props}) =>{
    const{getState, setState, getUserState} = props;
    return(
        <>
        <Header getUserState={getUserState}/>
        <Layout>
            <div className="col-lg-8">
            <Grid 
                getState={getState}
                setState={setState}
            />
            <MechanicList 
                 getState={getState}
                 setState={setState}
                 items={getState.item.members}
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
}

export default Boxes;