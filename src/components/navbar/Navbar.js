import React from 'react'
import logo from "../images/navbar/Logo.png"
import { Link } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
    return (
        <div className='navbar container'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='nav__links'>
                <Link className='navbar__link' to={"/"}>About Us</Link>
                <Link className='navbar__link' to={"/careers"}>Careers</Link>
                <Link className='navbar__link' to={"/servises"}>Services</Link>
                <Link className='navbar__link' to={"/blog"}>Blog</Link>
                <Link className='navbar__link' to={"/contact"}>Contact Us</Link>
                <button>Clone project</button>
            </div>
        </div>
    )
}

export default Navbar