import React from 'react'

import Logo from '../Assets/burger-logo.png'

import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='nav-logo'>
                <img src={Logo} alt='' />
            </span>
            <div className='nav-items'>
                <a href='/'>Burger Builder</a>
            </div>
        </div>
    )
}

export default Navbar