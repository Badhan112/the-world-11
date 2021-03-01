import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/footballer">Footballer</a>
                <a href="/cricketer">Cricketer</a>
                <a href="/your-team">Your Team</a>
            </nav>
            <h1>Build Your Team</h1>
        </div>
    );
};

export default Header;