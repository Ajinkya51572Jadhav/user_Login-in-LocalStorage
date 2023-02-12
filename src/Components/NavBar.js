import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/signup'}>signup</NavLink>
    <NavLink to={'/signin'}>signin</NavLink>
    <NavLink to={'/welcome'}>welcome</NavLink>
    </div>
  )
}

export default NavBar



  
                                        
                                   
                                           
                                           

