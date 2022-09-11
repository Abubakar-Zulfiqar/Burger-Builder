import React from 'react'
import '../Navbar/Navbar.css'
import Logo from '../Assets/burger-logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='navLogo'>
                <img src={Logo} alt="" />
            </span>
            <div className="navItems">
                <a href="/">Burger Builder</a>
            </div>
        </div>
    )
}

export default Navbar;