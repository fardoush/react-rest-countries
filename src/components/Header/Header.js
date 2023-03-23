import './Header.css';

import React from 'react';

const Header = () => {
    return (
        <div>
            
            <nav className="menu">
                <a href="#" className="nav-item">Home</a>
                <a href="#" className="nav-item">Country</a>
                <a href="#" className="nav-item">Search</a>
            </nav>
        </div>
    );
};

export default Header;