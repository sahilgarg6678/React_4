import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
    return(
        <div className='nav'>
            <Link to='/home' className='l'>Home</Link>
            <Link to='/student' className='l'>Student</Link>
            <Link to='/contact' className='l'>Contact</Link>
        </div>
    );
}
export default Navbar;