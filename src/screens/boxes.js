import React, { useState, useEffect } from "react";
import Layout from "./../layout/Layout";
import Header from "./../components/Header";
import Grid from "./../layout/Grid";
import Sidebar from "./../layout/Sidebar";
import MechanicList from "./../components/MechanicList";

// const Boxes = ({props}) =>{
//     const{getState, setState,getUserState,getCurrentPage} = props;
//     const[getLoading, setLoading] =useState(true);
//     const[getLoadingData, setLoadingData] =useState(true);
//     const[getData, setData] =useState({});
//     const urlteam = "https://backend-test-qfxw6.stensul.dev/teams";
//     const urlcar = "https://backend-test-qfxw6.stensul.dev/cars";
//     useEffect(()=>{
//         fetchTeam();
//     },[getLoadingData]);
//     const fetchTeam = async () => {
//         const responseTeam = await fetch(urlteam, {
//             crossDomain:true,
//             method: 'POST',
//             headers: {'Content-Type':'application/json'},
//             body: JSON.stringify({
//               name: getUserState.name,
//         })
//     });
//     const dataTeam = await responseTeam.json();
//     const responseCar = await fetch(urlcar, {
//         crossDomain:true,
//         method: 'POST',
//         headers: {'Content-Type':'application/json'},
//     });
//     const dataCar = await responseCar.json();
//         setState({...getState,team:dataTeam,car:dataCar});
//     }
//     useEffect(()=>{
//         if(getState.team){
//             setLoading(false);
//         }
//     },[getState]);

//     if(!getLoading){
//         return(
//             <>
//             <Header getUserState={getUserState}/>
//             <Layout isLoading={getLoading}>
//                 <div className="col-lg-9">
//                 <Grid
//                     getState={getState}
//                     setState={setState}
//                 />
//                 <MechanicList
//                      getState={getState}
//                      setState={setState}
//                      items={getState.team.members || []}
//                      isDragging={getState.isDragging}
//                 />
//                 </div>
//                 <Sidebar
//                     getUserState={getUserState}
//                     getState={getState}
//                     setState={setState}
//                 />
//             </Layout>
//             </>
//         );
//     }else{
//         return(
//             <>
//             <Header getUserState={getUserState}/>
//             <Layout isLoading={getLoading}>
//                 <div className="d-flex justify-content-center">
//                     <div className="spinner-border text-danger" role="status">
//                         <span className="sr-only">Loading...</span>
//                     </div>
//                 </div>
//             </Layout>
//             </>
//         );
//     }
// }


// const team = {
//     "name": "Stimpy",
//     "members": [
//       {
//         "id": "5e9dfb4b5011673bddb3ef6d",
//         "name": "Alejandro",
//         "role": "jackman"
//       },
//       {
//         "id": "5e9dfb4b501167a062b3ef6c",
//         "name": "Hernan",
//         "role": "gasman"
//       },
//       {
//         "id": "5e9dfb4b5011672823b3ef6b",
//         "name": "Elias",
//         "role": "mechanic"
//       },
//       {
//         "id": "5e9dfb4b50116751b4b3ef6a",
//         "name": "Gonzalo",
//         "role": "mechanic"
//       },
//       {
//         "id": "5e9dfb4b5011677fefb3ef69",
//         "name": "Jose",
//         "role": "mechanic"
//       }
//     ],
//     "id": "5e9dfb4b5011670219b3ef68"
//   }


// const car = {
//     "id": "5ddec37b4c9e990012073013",
//     "fuel": 21,
//     "lifted": false,
//     "wheels": [
//       {
//         "id": "5ddec37b4c9e990012073013",
//         "position": "front-left",
//         "status": "NEEDS_CHANGE"
//       },
//       {
//         "id": "5ddec37b4c9e990012073012",
//         "position": "front-left",
//         "status": "LOOSE"
//       },
//       {
//         "id": "5ddfd75bd048f6005df3d8f5",
//         "position": "rear-left",
//         "status": "READY"
//       },
//       {
//         "id": "5ddfd75bd048f6005df3d8f4",
//         "position": "rear-right",
//         "status": "NEEDS_CHANGE"
//       }
//     ]
//   }

const Car = (props) => <Grid id={props.id} />;

const Boxes = (props) => {
    const { display, getGameState, setGameState } = props;
    const [getTeam, setTeam] = useState(null);
    const [getCar, setCar] = useState(null);

    // useEffect(() => {
    //     if (!getCar) {
    //         apiClient.getCar().then((car) => setCar(car));
    //     }
    // }, [getCar]);

    return (
        <div className={`container`}>
            <div className="row">
                <div className="col-9">
                    {/* <Car id={getCar.id} />
                    <MechanicList items={getTeam.members} /> */}
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
};

export default Boxes;
