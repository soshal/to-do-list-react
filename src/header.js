import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <> 
        <div className="wade">
           <Link to="/">Home</Link>
           <Link to='/about'>about</Link>
           <Link to="/contact">Contact</Link>
        </div>
        </>
    )};
        

    export default Header;