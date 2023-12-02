import React from 'react';
import '../styles/nav.css'
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='nav'>
            <div className='links'>
                <NavLink to='/movies'><h1>Movies</h1></NavLink>
                <NavLink to='/users'><h1>Users</h1></NavLink>
            </div>
            <div className='btns'>
                <NavLink to='/'><button className='logout-btn'>Log Out</button></NavLink>
                <NavLink to='/profile'><button className='prof-btn'>BB</button></NavLink>
            </div>
        </div>
    );
}

export default Nav;