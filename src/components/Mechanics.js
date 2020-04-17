import React from "react"

const Mechanics = (props) => {

    return(
    <div className="row mt-5">
      <div className="col-12">
        <div className="mechanics">
            <ul className="mechanic">
                {props.children}
            </ul>
        </div>  
        </div>
    </div>
);
}

export default Mechanics;