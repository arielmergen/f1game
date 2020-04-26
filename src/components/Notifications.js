import React from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

const notify = () =>{
    toast('Basic notification');
}


const Notification = props => {
    const{code} = props;
    
    let toast=null;
    switch(code){
        case 18:
            toast = toast('Basic notification');
        default : return toast('Basic notification');
    }
    return (toast);
}

export default Notification;