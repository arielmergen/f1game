import React from "react";

const Card = ({ itemDropped }) => (
    <div className={`card`}>
        {itemDropped.image ? (
            <img
                className="card-img-top"
                src={itemDropped.image}
                alt="Card image cap"
            />
        ) : undefined}
        <div
            className="btn-group-vertical"
            role="group"
            aria-label="Vertical button group"
        >
            <button type="button" className="btn btn-dark">
                Remove wheel
            </button>
            <button type="button" className="btn btn-dark">
                Lifting the car
            </button>
            <button type="button" className="btn btn-dark">
                IS all Ok
            </button>
        </div>
        <div className="card-body">
            <h5 className="card-title">
                {itemDropped ? itemDropped.name : ""}
            </h5>
            <span>{itemDropped ? itemDropped.role : ""}</span>
            <p className="card-text">
                He is in charge of lifting the car as soon as it reaches the
                pits.
            </p>
            <p className="card-text">
                It is also responsible for removing the right front wheel once
                it has been loosened by the technicians.
            </p>
            <p className="card-text">
                It’s the one that validates that everything is ok so that the
                car can get out of the pits.
            </p>
        </div>
    </div>
);

const Menu = (props) => <Card itemDropped={props.itemDropped} />;

export default Menu;
