import React from "react";
import { toast } from "react-toastify";

const Msg = (props) => {
    return (
        <div className="card border-light mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        src={props.image}
                        className="card-img"
                        alt="mechanic"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">{props.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Message = (props) => {
    return toast();
};
