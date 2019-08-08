import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import logo from '../../img/logo.png'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction';

const Navbar = (props) => {
    const { auth } = props;
    
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="nav-wrapper white">
            <div className="container">
                <Link to='/' className="brand-logo">
                    <img src={logo} width="40px"/>
                </Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);