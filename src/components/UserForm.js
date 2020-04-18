import React, {useState,useEffect } from 'react';

const UserForm = (props) => {

    const {getState,setState,getUserState,setUserState,getCurrentPage,setCurrentPage} = props;   

    const initialNameState={
        name:''
    }
    const[getName,setName]=useState(initialNameState);

  

   
    const onclick = ev =>{
        ev.preventDefault();
        setUserState({...getUserState,name:getName.name});
        setCurrentPage({...getCurrentPage,page:'Boxes'})
    }
    const onchange = ev =>{
        ev.preventDefault();
        setName({...getName,name:ev.target.value});
    }
    
    return (
        <section className="page-sectiontext-white mb-0">
            <div className="container">
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Team Name</label>
                    <input className="form-control" 
                    id="name" 
                    type="text" 
                    placeholder="Team Name" 
                    required="required" 
                    data-validation-required-message="Please enter your name." 
                    aria-invalid="false"
                    value={getName.name || ''}
                    onChange={onchange}
                    />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-danger btn-xl btn-block" id="sendMessageButton" onClick={onclick}>LETS GO!</button></div>
                </div>
        </div>
        </section>
    );
}

export default UserForm;