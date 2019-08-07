import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink className="white-text green" to='/'>Navegar</NavLink></li>
            <li><NavLink className="black-text" to='/create'>Escrever</NavLink></li>
            <li><NavLink className="black-text" to='/account'>Minha Conta</NavLink></li>
            <li><NavLink className="logout" to='/'>Sair</NavLink></li>
        </ul>
    )
}

export default SignedInLinks