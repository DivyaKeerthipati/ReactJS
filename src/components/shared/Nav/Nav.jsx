import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
    return (
        <nav className="float-right mt-2">
            <NavLink activeStyle={{backgroundColor:'#007bff',color:'white'}} className="btn btn-link" to="/login">Login</NavLink>
            <NavLink activeStyle={{backgroundColor:'#007bff',color:'white'}} className="btn btn-link" to="/register">Register</NavLink>
        </nav>
    )
}

export default Nav