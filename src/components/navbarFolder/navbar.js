import React from 'react'
import {Nav, NavIcons, NavLink, Bar} from './navbarElements'

const navbar = ({toggle}) => {
  return (
    <Nav>
        <NavLink to="/">
            Pizza
        </NavLink>
        <NavIcons onClick={toggle}>
            <p>Menu</p>
            <Bar/>
        </NavIcons>
    </Nav>
  )
}

export default navbar
