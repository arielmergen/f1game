import {
    CHECK,
    LIFT_CAR,
    UNFASTEN_WHEEL,
    FASTEN_WHEEL,
    CHANGE_WHEEL,
    FILL_TANK,
} from "../constants";
export const initialStateTask = {
    isActive: false,
    droppedin: "",
    task: "",
    mechanic: {},
    error: true,
    code: 0,
};
export const reducerTask = (state, action) => {
    console.log(action);
    switch (action.type) {
        case LIFT_CAR:
            return {
                task: action.type,
                car: action.payload.car,
                mechanic: action.payload.mechanic,
                droppedin: action.payload.droppedin,
            };
        case FILL_TANK:
            return {
                task: action.type,
                car: action.payload.car,
                mechanic: action.payload.mechanic,
                droppedin: action.payload.droppedin,
            };
        case CHANGE_WHEEL:
            return {
                task: action.type,
                car: action.payload.car,
                mechanic: action.payload.mechanic,
                droppedin: action.payload.droppedin,
            };
        case UNFASTEN_WHEEL:
            return {
                task: action.type,
                car: action.payload.car,
                mechanic: action.payload.mechanic,
                droppedin: action.payload.droppedin,
            };
        case FASTEN_WHEEL:
            return {
                task: action.type,
                car: action.payload.car,
                mechanic: action.payload.mechanic,
                droppedin: action.payload.droppedin,
            };
        case CHECK:
            return {
                task: action.type,
                car: action.payload.car,
            };
        case "FINISH_TASK":
            return state;
        default:
            return state;
    }
};

export const initialTaskMessage = {
    task: "",
    code: 0,
    message: "",
};

export const reducerTaskMessage = (state, action) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            return {
                task: action.payload.task,
                message: action.payload.message,
            };
        case "SEND_ERROR_MESSAGE":
            return {
                task: action.payload.task,
                code: action.payload.code,
                message: action.payload.message,
            };
        default:
            return state;
    }
};

export const initialStateTeam = {
    loading: true,
    id: "",
    name: "",
    members: [],
};
export const reducerTeam = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                loading: true,
                id: "",
                name: "",
                members: [],
            };
        case "FETCH_FINISH":
            return {
                loading: false,
                id: action.payload.id,
                name: action.payload.name,
                members: action.payload.members,
            };
        default:
            return state;
    }
};

export const initialStateCar = {
    loading: true,
    id: "",
    fuel: 0,
    lifted: false,
    wheels: [],
};
export const reducerCar = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                loading: true,
                id: "",
                fuel: 0,
                lifted: false,
                wheels: [],
            };
        case "FETCH_FINISH":
            return {
                loading: false,
                id: action.payload.id,
                fuel: action.payload.fuel,
                lifted: action.payload.lifted,
                wheels: action.payload.wheels,
            };
    }
};

//SELECT MECHANIC
export const initialStateMechanicSelected = {
    loading: true,
    selected: false,
    id: "",
    name: "",
    rol: "",
    image: "",
    droppedin: {},
};

export const reducerSelectedMechanic = (state, action) => {
    console.log("reducerSelectedMechanic", action);
    switch (action.type) {
        case "MECHANIC_SELECTED":
            return {
                selected: true,
                car: action.payload.car,
                mechanic: action.payload.mechanic,
                position: action.payload.position,
            };
        case "MECHANIC_UNSELECTED":
            return {
                selected: false,
                id: "",
                name: "",
                rol: "",
                droppedin: {},
            };
        default:
            return state;
    }
};

//DISPATCH API
export const initialStateReducerApi = {
    api: "",
    data: {},
};
export const reducerDipatchApi = (state, action) => {
    console.log("reducerDipatchApi", action);
    switch (action.type) {
        case LIFT_CAR:
            return {
                api: LIFT_CAR,
                data: {
                    carId: action.payload.data.carId,
                    mechanicId: action.payload.data.mechanicId,
                },
            };
        case FILL_TANK:
            return {
                api: FILL_TANK,
                data: {
                    carId: action.payload.data.carId,
                    mechanicId: action.payload.data.mechanicId,
                },
            };
        case UNFASTEN_WHEEL:
            return {
                api: UNFASTEN_WHEEL,
                data: action.payload.data,
            };
        case CHANGE_WHEEL:
            return {
                api: CHANGE_WHEEL,
                data: action.payload.data,
            };
        case FASTEN_WHEEL:
            return {
                api: FASTEN_WHEEL,
                data: action.payload.data,
            };
        case CHECK:
            return {
                api: CHECK,
                data: action.payload.data,
            };
        default:
            return state;
    }
};
