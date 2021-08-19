import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './navBar.style'

const Navbar =() => {
    return (
        <>
            <Nav>
                <NavLink to='/'>DLROSA</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;