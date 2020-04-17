import React from 'react';

const Header = (props) =>{
    return(
        <>
        <header className="masthead bg-danger text-white text-center pt-1 pb-2 mb-5">
            <div className="container d-flex align-items-center flex-row">
                <img className="masthead-avatar mb-5" src="/img/avataaars.svg" alt="" />
                <h1 className="masthead-heading text-uppercase mb-0">F1 Game</h1>
                <div className="divider-custom divider-light d-none">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Carlos Ariel Mergen - Challenge</p>
            </div>
        </header>
        </>
    );
};

export default Header;