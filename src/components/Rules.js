import React, { useContext } from "react";

const Rules = (props) => {
    const { goToUserFormScreen } = props;

    const goToGame = (e) => {
        e.preventDefault();
        goToUserFormScreen();
    };

    return (
        <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
                <h2 className="portfolio-modal-title text-center text-secondary text-uppercase mb-0">Rules</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                        <h6 className="text-secondary text-uppercase mb-3">Each mechanic has a specific role:</h6>
                    <div className="container">
                                <div className="row">
                                    <div className="col-lg-2 align-middle">
                                        <p className="align-middle text-danger font-weight-bold">Jackman (one)</p>
                                    </div>
                                <div className="col-lg-10 text-left">
                                    <p className="mb-1">● He is in charge of lifting the car as soon as it reaches the pits.</p>
                                    <p className="mb-1">● It is also responsible for removing the right front wheel once it has been loosened by the technicians.</p>
                                    <p className="mb-1">● It’s the one that validates that everything is ok so that the car can get out of the pits.</p>
                                </div>
                            </div>
                        <div className="row mt-4">
                            <div className="col-lg-2 align-middle">
                                <p className="align-middle text-danger font-weight-bold">Wheel Technicians (three) </p>
                            </div>
                        <div className="col-lg-10 text-left">
                            <p className="mb-1">● Loosen the wheel lock</p>
                            <p className="mb-1">● Remove the wheel and replace it with another </p>
                            <p className="mb-1">● Secure the new wheel</p>
                        </div>
                        </div>
                </div>
            <button className="btn btn-danger mt-4" onClick={goToGame}><i className="fas fa-times fa-fw"></i>Go to Game!</button>
            </div>
        </div>
    );
};

export default Rules;
