import React from "react";

const Layout = (props) => {
    return (
        <div className="container h-100">
            <div className="row">{props.children}</div>
        </div>
    );
};

export default Layout;
