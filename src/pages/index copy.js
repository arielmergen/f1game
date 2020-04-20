import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./../components/UserForm";
import Rules from "./../components/Rules";
import "./../css/styles.css";

const mockteam = {
    id: "5ddec37b4c9e990012073013",
    name: "Stimpy",
    members: [
        {
            id: "5deac754a352ca0123bf3c27",
            name: "Jose",
            role: "jackman",
        },
        {
            id: "5deac754a352ca0123bf3c26",
            name: "Santiago",
            role: "mechanic",
        },
        {
            id: "5deac754a352ca0123bf3c25",
            name: "Alejandro",
            role: "mechanic",
        },
        {
            id: "5deac754a352ca0123bf3c24",
            name: "Denise",
            role: "mechanic",
        },
        {
            id: "5deac754a352ca0123bf3c23",
            name: "Hernan",
            role: "gasman",
        },
    ],
};

const mockcar = {
    id: "5ddec37b4c9e990012073013",
    fuel: 21,
    lifted: false,
    wheels: [
        {
            id: "5ddec37b4c9e990012073013",
            position: "front-left",
            status: "NEEDS_CHANGE",
        },
        {
            id: "5ddec37b4c9e990012073012",
            position: "front-left",
            status: "LOOSE",
        },
        {
            id: "5ddfd75bd048f6005df3d8f5",
            position: "rear-left",
            status: "READY",
        },
        {
            id: "5ddfd75bd048f6005df3d8f4",
            position: "rear-right",
            status: "NEEDS_CHANGE",
        },
    ],
};

const Index = (props) => {
    const [getIsLoading, setIsolading] = useState(true);
    const [getState, setState] = useState({});
    const [getCar, setCar] = useState({});
    const [getTeam, setTeam] = useState({});
    const [getUserState, setUserState] = useState({});
    const [getUserScreen, setUserScreen] = useState({
        screen: "UserForm",
    });
    useEffect(() => {
        if (Object.keys(getUserState).length === 0) return;
        const getCarFromApi = async () => {
            // const {name} = getUserState;
            // const urlTeam = "https://backend-test-qfxw6.stensul.dev/teams";
            // const urlCars = "https://backend-test-qfxw6.stensul.dev/cars";
            // const [team, car] = await Promise.all([
            //     axios.post(urlTeam,{name}),
            //     axios.post(urlCars)
            // ]);
            setTeam(mockteam);
            setCar(mockcar);
        };
        getCarFromApi();
    }, [getUserState]);
    console.log(getUserScreen);
    return (
        <>
            <UserForm
                setUserState={setUserState}
                getUserScreen={getUserScreen}
                setUserScreen={setUserScreen}
                display={getUserScreen.screen === "UserForm" ? true : false}
            />
            <Rules
                setUserScreen={setUserScreen}
                getUserScreen={getUserScreen}
                display={getUserScreen.screen === "Rules" ? true : false}
            />
        </>
    );
};

export default Index;
