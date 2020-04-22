export const LIFT_CAR = "lift";
export const UNLIFT_CAR = "unlifted";
export const UNFASTEN_WHEEL = "unfasten";
export const FASTEN_WHEEL = "fasten";
export const CHANGE_WHEEL = "change";
export const FILL_TANK = "fill-tank";

export const MECHANIC = "mechanic";
export const MECHANIC_ACTIONS = [UNFASTEN_WHEEL, CHANGE_WHEEL, FASTEN_WHEEL];

export const JACKMAN = "jackman";
export const JACKMAN_ACTIONS = [LIFT_CAR, CHANGE_WHEEL, UNLIFT_CAR];

export const GAS_MAN = "gasman";
export const GAS_MAN_ACTIONS = [FILL_TANK];

export const NEEDS_CHANGE = "NEEDS_CHANGE";
export const LOOSE = "LOOSE";
export const REMOVED = "REMOVED";
export const PLACED = "PLACED";
export const CHANGED = "CHANGED";
export const CAR_WHEEL_STATES = [NEEDS_CHANGE, LOOSE, REMOVED, PLACED, CHANGED];

export const FRONT = "front";
export const FUEL = "fuel";

export const FRONT_LEFT = "front-left";
export const FRONT_RIGTH = "front-right";
export const REAR_LEFT = "rear-left";
export const REAR_RIGTH = "rear-right";
export const WHEEL_ACTIONS = [UNFASTEN_WHEEL, FASTEN_WHEEL, CHANGE_WHEEL]

export const WHEEL_POSITIONS = [FRONT_LEFT, FRONT_RIGTH, REAR_LEFT, REAR_RIGTH];
export const MECHANIC_PLACE_RULES = {
    [FRONT]: [JACKMAN],
    [FRONT_RIGTH]: [JACKMAN, MECHANIC],
    [FRONT_LEFT]: [MECHANIC],
    [REAR_RIGTH]: [MECHANIC],
    [REAR_LEFT]: [MECHANIC],
    [FUEL]: [GAS_MAN],
};
