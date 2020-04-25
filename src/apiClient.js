const API_URI = process.env.REACT_APP_API_URI
    ? process.env.REACT_APP_API_URI
    : "https://backend-test-qfxw6.stensul.dev/";

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const createTeam = (name) =>
    fetch(API_URI + "teams", {
        crossDomain: true,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
    })
        .then(handleErrors)
        .then((data) => data.json());

const car = (carId) =>
    fetch(API_URI + "cars", {
        crossDomain: true,
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })
        .then(handleErrors)
        .then((data) => data.json());

const createCar = (name) =>
    fetch(API_URI + "cars", {
        crossDomain: true,
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })
        .then(handleErrors)
        .then((data) => data.json());

const liftCar = ({ carId, mechanicId }) => 
    fetch(API_URI + `cars/${carId}/lift`, {
        crossDomain: true,
        method: "POST",
        headers: { "Content-Type": "application/json", "x-member-id": mechanicId },
        body: JSON.stringify({ carId }),
    })
        .then(handleErrors)
        .then((data) => data.json());

const fillTank = ({ carId, mechanicId }) =>
    fetch(API_URI + `cars/${carId}/fill-tank`, {
        crossDomain: true,
        method: "POST",
        headers: { "Content-Type": "application/json", "x-member-id": mechanicId },
    }).then((data) => data.json());

const wheelAction = ({ mechanicId, carId, position, action }) =>
    fetch(API_URI + `cars/${carId}/wheels/${position}/${action}`, {
        crossDomain: true,
        method: "POST",
        headers: { "Content-Type": "application/json", "x-member-id": mechanicId },
    }).then((data) => data.json());

const check = ({ carId }) =>
    fetch(API_URI + `cars/${carId}/check`, {
        crossDomain: true,
        method: "POST",
    }).then((data) => data.json());

export default { createTeam, car, createCar, liftCar, fillTank, wheelAction, check };
