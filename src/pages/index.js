import React, { useState, useCallback } from "react";

import apiClient from "../apiClient";

import Header from "./../components/Header";
import Intro from "./../screens/intro";
import Boxes from "./../screens/boxes";
import Score from "./../screens/score";
import "./../css/styles.css";

const inital_game_state = { name: null, team: null, error: null };

const Index = (props) => {
    const [getGameState, setGameState] = useState(inital_game_state);
    const [getCurrentpage, setCurrentPage] = useState({
        page: "Intro",
    });

    const goToErrorPage = useCallback(
        () => setCurrentPage({ page: "Error" }),
        []
    );
    const goToIntroPage = useCallback(
        () => setCurrentPage({ page: "Intro" }),
        []
    );
    const goToScorePage = useCallback(
        () => setCurrentPage({ page: "Score" }),
        []
    );
    const goToBoxesPage = useCallback(
        (name) => {
            apiClient
                .createTeam(name)
                .then((team) => {
                    setGameState({ ...getGameState, team, name });
                    setCurrentPage({ page: "Boxes" });
                })
                .catch((err) => {
                    setGameState({ ...getGameState, error: err });
                    goToErrorPage();
                });
        },
        [getGameState, goToErrorPage]
    );
    const returnToIndex = useCallback(() => {
        setGameState(inital_game_state);
        goToIntroPage();
    }, [goToIntroPage]);

    return (
        <>
            <Header />
            <br />
            {getCurrentpage.page === "Intro" && (
                <Intro startGame={goToBoxesPage} />
            )}
            {getCurrentpage.page === "Boxes" && (
                <Boxes
                    getGameState={getGameState}
                    setGameState={setGameState}
                    goToScorePage={goToScorePage}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {getCurrentpage.page === "Score" && (
                <Score
                    getGameState={getGameState}
                    setGameState={setGameState}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {getCurrentpage.page === "Error" && getGameState.error && (
                <ErrorMessage
                    error={getGameState.error}
                    returnToIndex={returnToIndex}
                />
            )}
        </>
    );
};

const ErrorMessage = ({ error, returnToIndex }) => (
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1 className="text-danger">
                    Error: Britney Spears Would Says - Oops!...I Did It Again -{" "}
                    {error.message}
                </h1>
                <button
                    className="btn btn-danger"
                    onClick={(e) => {
                        e.preventDefault();
                        returnToIndex();
                    }}
                >
                    Return
                </button>
            </div>
        </div>
    </div>
);

export default Index;
