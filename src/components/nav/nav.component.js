import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <div className='nav'>
            <ul className='navlinks'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/test'>Test</Link></li>
            </ul>
        </div>
    );
};

export default Nav;