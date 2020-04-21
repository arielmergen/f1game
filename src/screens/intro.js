import React, { useState, useEffect } from "react";

import UserForm from "./../components/UserForm";
import Rules from "./../components/Rules";

const Intro = ({ getGameState, setGameState, goToBoxesPage }) => {
    const [getUserScreen, setUserScreen] = useState({ screen: "UserForm" });
    const [getUserState, setUserState] = useState('');

    useEffect(() => {
        if (!getUserState) return
        setGameState({ ...getGameState, name: getUserState });
        goToBoxesPage();
    }, [getUserState,setUserState,getGameState,setGameState,goToBoxesPage]);

    const goToRulesScreen = () => setUserScreen({ screen: "Rules" });
    const goToUserFormScreen = () => setUserScreen({ screen: "UserForm" });

    return (
        <div className={`container`}>
            {getUserScreen.screen === "UserForm" && (
                <UserForm setUserState={setUserState} getUserScreen={getUserScreen} goToRulesScreen={goToRulesScreen} />
            )}
            {getUserScreen.screen === "Rules" && (
                <Rules setUserScreen={setUserScreen} goToUserFormScreen={goToUserFormScreen} />
            )}
        </div>
    );
};

export default Intro;
