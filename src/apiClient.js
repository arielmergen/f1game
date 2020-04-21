const API_URI = process.env.REACT_APP_API_URI ? process.env.REACT_APP_API_URI : "https://backend-test-qfxw6.stensul.dev/";

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

    const createCar = (name) =>
    fetch(API_URI + "cars", {
        crossDomain: true,
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
    .then(handleErrors)
    .then((data) => data.json());

const liftCar = (carId, mechanicId) => 
fetch(API_URI + `cars/${carId}/lift`,{
    crossDomain: true,
    method: "POST",
    headers: { "Content-Type": "application/json", "x-member-id": mechanicId },
    body: JSON.stringify({carId}),
})
.then(handleErrors)
.then((data) => data.json());

// const getCar = (name) =>
//     fetch(API_URI + "cars", {
//         crossDomain: true,
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//     }).then((data) => data.json());

// const getTeam = (id) =>
//     fetch(API_URI + "teams", {
//         crossDomain: true,
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//     }).then((data) => data.json());

export default { createTeam, createCar, liftCar };
