import React, { useEffect } from 'react';

const UserForm = (props) => {

    const {getState,setState,getUserState,setUserState,getCurrentPage,setCurrentPage} = props;
    const url = "https://backend-test-qfxw6.stensul.dev/teams";

    useEffect(()=>{
        setUserState({...getUserState, name:getState.item.name});
    },[getState]);
    
    const onclick = ev =>{
        ev.preventDefault();
        if(getUserState.name){
            fetch(url, {
                crossDomain:true,
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                  name: getUserState.name,
                })
            }).then(res=>res.json())
            .then(data=>{
                setState({...getState.item,item:data});
                setCurrentPage({...getCurrentPage,page:'Boxes'});
            })
        }
            
    }
    const onchange = ev =>{
        ev.preventDefault();
        props.setUserState({...getUserState, name:ev.target.value });
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
                    value={getUserState.name || ''}
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