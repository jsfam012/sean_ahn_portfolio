import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    return (

        <header>
            <img
                className="logo header-img"
                src="./assets/images/sean_fortfolio_logo.png"
                alt="logo"
            />
            <img
                className="header-img"
                src="./assets/images/profile_photo.jpg"
                alt="profile photo"
            />
            <Navigation />

        </header>

    );
}

export default Header;