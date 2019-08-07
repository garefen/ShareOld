import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink className="black-text" to='/'>Navegar</NavLink></li>
            <li><NavLink className="black-text" to='/'>Instituições</NavLink></li>
            <li><NavLink className="black-text" to='/'>Criadores</NavLink></li>
            <li><NavLink className="black-text" to='/signup'>Registre-se</NavLink></li>
            <li><NavLink className="black-text" to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks