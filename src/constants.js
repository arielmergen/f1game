/*Technician actions in the Api*/
export const LIFT_CAR = "lift";
export const CHECK = "check";
export const UNFASTEN_WHEEL = "unfasten";
export const FASTEN_WHEEL = "fasten";
export const CHANGE_WHEEL = "change";
export const FILL_TANK = "fill-tank";

/*Actions the can make  the Technician per rol in the team */
export const MECHANIC = "mechanic";
export const MECHANIC_ACTIONS = [UNFASTEN_WHEEL, CHANGE_WHEEL, FASTEN_WHEEL];

export const JACKMAN = "jackman";
export const JACKMAN_ACTIONS = [LIFT_CAR, CHANGE_WHEEL, CHECK];

export const GAS_MAN = "gasman";
export const GAS_MAN_ACTIONS = [FILL_TANK];

/*Estatus de las ruedas*/
export const NEEDS_CHANGE = "NEEDS_CHANGE";
export const LOOSE = "LOOSE";
export const REMOVED = "REMOVED";
export const PLACED = "PLACED";
export const CHANGED = "CHANGED";
export const CAR_WHEEL_STATES = [NEEDS_CHANGE, LOOSE, REMOVED, PLACED, CHANGED];

/*Position of the car*/
export const FRONT = "front";
export const FUEL = "fuel";

/*Position of the wheels in the car*/
export const FRONT_LEFT = "front-left";
export const FRONT_RIGTH = "front-right";
export const REAR_LEFT = "rear-left";
export const REAR_RIGTH = "rear-right";
export const WHEEL_POSITIONS = [FRONT_LEFT, FRONT_RIGTH, REAR_LEFT, REAR_RIGTH];
/*Posible actions with the wheels*/
export const WHEEL_ACTIONS = [UNFASTEN_WHEEL, FASTEN_WHEEL, CHANGE_WHEEL];
export const WHEEL_STATES = [NEEDS_CHANGE, LOOSE, REMOVED, PLACED, CHANGED];

/*Rules for specific places the Technicians Occuped*/
export const MECHANIC_PLACE_RULES = {
    [FRONT]: [JACKMAN],
    [FRONT_RIGTH]: [JACKMAN, MECHANIC],
    [FRONT_LEFT]: [MECHANIC],
    [REAR_RIGTH]: [MECHANIC],
    [REAR_LEFT]: [MECHANIC],
    [FUEL]: [GAS_MAN],
};
