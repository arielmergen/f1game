import React, { useContext } from "react";

const Rules = (props) => {
    const { goToUserFormScreen } = props;

    const goToGame = (e) => {
        e.preventDefault();
        goToUserFormScreen();
    };

    return (
        <div className={`container`}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        You will coordinate the team of mechanics to ensure that the pit process is as fast and
                        successful as possible.{" "}
                    </h5>
                </div>
                <div className="card-body">
                    <p className="h6">Each mechanic has a specific role:</p>
                    <h5 className="card-title">Jackman (one)</h5>
                    <p className="card-text">● He is in charge of lifting the car as soon as it reaches the pits.</p>
                    <p className="card-text">
                        ● It is also responsible for removing the right front wheel once it has been loosened by the
                        technicians.
                    </p>
                    <p className="card-text">
                        ● It’s the one that validates that everything is ok so that the car can get out of the pits.
                    </p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Wheel Technicians (three) </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        They are responsible for changing the wheels, for this they must:
                    </h6>
                    <p className="card-text">● Loosen the wheel lock</p>
                    <p className="card-text">● Remove the wheel and replace it with another </p>
                    <p className="card-text">● Secure the new wheel</p>
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-danger btn-xl btn-block" id="sendMessageButton" onClick={goToGame}>
                        Go to Game!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Rules;
