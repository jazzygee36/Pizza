import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './sidebarElement'

const sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon> 
        <SidebarMenu>
            <SidebarLink to ='/'>Pizzas</SidebarLink>
            <SidebarLink to ='/'>Desert</SidebarLink>
            <SidebarLink to ='/'>Full Menu</SidebarLink>  
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'>Order Now</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default sidebar
