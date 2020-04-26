import React, { useState } from "react";

import UserForm from "./../components/UserForm";
import Rules from "./../components/Rules";

const Intro = ({ startGame }) => {
    const [getUserScreen, setUserScreen] = useState({ screen: "UserForm" });

    const goToRulesScreen = () => setUserScreen({ screen: "Rules" });
    const goToUserFormScreen = () => setUserScreen({ screen: "UserForm" });

    return (
        <div className={`container`}>
            {getUserScreen.screen === "UserForm" && (
                <UserForm
                    getUserScreen={getUserScreen}
                    goToRulesScreen={goToRulesScreen}
                    startGame={startGame}
                />
            )}
            {getUserScreen.screen === "Rules" && (
                <Rules
                    setUserScreen={setUserScreen}
                    goToUserFormScreen={goToUserFormScreen}
                />
            )}
        </div>
    );
};

export default Intro;
