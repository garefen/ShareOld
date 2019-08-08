import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink className="white-text green" to='/'>Navegar</NavLink></li>
            <li><NavLink className="black-text" to='/create'>Escrever</NavLink></li>
            <li><NavLink className="black-text" to='/account'>Minha Conta</NavLink></li>
            <li><a onClick={props.signOut} className="logout" to='/'>Sair</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)