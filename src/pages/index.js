import React, { useState, useEffect } from "react";

import apiClient from "../apiClient";

import Header from "./../components/Header";
import Intro from "./../screens/intro";
import Boxes from "./../screens/boxes";
import Score from "./../screens/score";
import Rules from "./../components/Rules";
import "./../css/styles.css";

const Index = (props) => {
    const [getGameState, setGameState] = useState({ name: null, team: null, error: null });
    const [getCurrentpage, setCurrentPage] = useState({
        page: "Intro",
    });

    const goToIntroPage = () => setCurrentPage({ page: "Intro" });
    const goToBoxesPage = () => setCurrentPage({ page: "Boxes" });
    const goToScorePage = () => setCurrentPage({ page: "Score" });
    const goToErrorPage = () => setCurrentPage({ page: "Error" });

    useEffect(() => {
        const { name, team, error } = getGameState;
        if (!name || team || error) return;
        apiClient
            .createTeam('')
            .then((team) => setGameState({ ...getGameState, team }))
            .catch((err) => {
                console.log('err', err)
                setGameState({ ...getGameState, error: err });
                goToErrorPage();
            });
    }, [getGameState]);

    const returnToIndex = () => {
        setGameState({ ...getGameState, error: null, name:''});
        goToIntroPage()
    }

    return (
        <>
            <Header />
            <br />
            {getCurrentpage.page === "Intro" && (
                <Intro setGameState={setGameState} getCurrentpage={getCurrentpage} goToBoxesPage={goToBoxesPage} />
            )}
            {getCurrentpage.page === "Boxes" && <Boxes getGameState={getGameState} goToScorePage={goToScorePage} />}
            {getCurrentpage.page === "Score" && <Score getGameState={getGameState} setGameState={setGameState} />}
            {getCurrentpage.page === "Error" && getGameState.error && <ErrorMessage error={getGameState.error} returnToIndex={returnToIndex} />}
        </>
    );
};

const ErrorMessage = ({ error, returnToIndex }) => (
    <>
        <h1>Error: {error.message}</h1>
        <button
            onClick={(e) => {
                e.preventDefault();
                returnToIndex()
            }}
        >
            Return
        </button>
    </>
);

export default Index;
