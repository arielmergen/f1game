import React, { useState } from "react";

const UserForm = (props) => {
    const {goToRulesScreen, startGame } = props;

    const [getName, setName] = useState({});
    const [error, setError] = useState(false);

    const { name } = getName;

    const onclick = (ev) => {
        ev.preventDefault();
        if (Object.keys(getName).length === 0) {
            setError(true);
            return;
        }
        setError(false);
        startGame(getName.name);
    };
    const onchange = (ev) => {
        ev.preventDefault();
        setName({ [ev.target.name]: ev.target.value });
    };

    const onClickViewRules = (ev) => {
        ev.preventDefault();
        goToRulesScreen();
    };

    return (
        <>
            <section className={`page-section text-white mb-0 pt-0 pb-0`}>
                <div className="container">
                    <h4 className="text-center text-uppercase text-secondary mb-2">
                        Team: {name ? name : "Set your team name"}
                    </h4>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <svg
                                className="svg-inline--fa fa-star fa-w-18"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg=""
                            >
                                <path
                                    fill="currentColor"
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                            </svg>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </section>
            <section className={`page-sectiontext-white mb-0`}>
                <div className="container">
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Team Name</label>
                            <input
                                className="form-control"
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Team Name"
                                required="required"
                                data-validation-required-message="Please enter your name."
                                aria-invalid="false"
                                value={name || ""}
                                onChange={onchange}
                            />
                            {error ? <p className="help-block text-danger">Please set your Team Name</p> : null}
                        </div>
                        <div className="form-group mt-4">
                            <button
                                className="btn btn-danger btn-xl btn-block"
                                id="sendMessageButton"
                                onClick={onclick}
                            >
                                LETS GO!
                            </button>
                        </div>
                        <div className="form-group mt-4">
                            <button
                                className="btn btn-danger btn-xl btn-block"
                                id="sendMessageButton"
                                onClick={onClickViewRules}
                            >
                                View Rules
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserForm;
