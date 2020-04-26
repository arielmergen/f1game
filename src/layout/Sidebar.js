import React from "react";
import Menu from "./Menu";

const RenderIfNeeded = ({ display, teamname, itemDropped }) => {
    if (display) {
        return <Menu teamname={teamname} itemDropped={itemDropped} />;
    } else {
        return (
            <h5 className="text-center text-uppercase text-secondary mb-2">
                Assign (drag) the mechanics to their corresponding area.
            </h5>
        );
    }
};

const Sidebar = (props) => {
    const { getState, setState, getUserState } = props;

    return (
        <div className="col-lg-3">
            <h4 className="text-center text-uppercase text-secondary mb-2">
                Team:{" "}
                {getUserState.name ? getUserState.name : "Set your team name"}
            </h4>
            <RenderIfNeeded
                display={getState.display}
                teamname={getUserState.name}
                itemDropped={getState.itemDropped}
            />
            {/* {getState.display ? <Menu teamname={getUserState.name} itemDropped={getState.itemDropped} /> : undefined} */}
        </div>
    );
};

export default Sidebar;
