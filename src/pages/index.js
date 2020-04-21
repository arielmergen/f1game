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
            .createTeam(name)
            .then((team) => setGameState({ ...getGameState,team }))
            .catch((err) => {
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
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1 className="text-danger">Error: Britney Spears Would  Says - Oops!...I Did It Again - {error.message}</h1>
            <button
            className="btn btn-danger"
            onClick={(e) => {
                e.preventDefault();
                returnToIndex()
            }}
            >
                Return
            </button>
            </div>
        </div>
    </div>
);

export default Index;
