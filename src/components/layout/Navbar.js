import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import logo from '../../img/logo.png'
import { connect } from 'react-redux'

const Navbar = () => {
    return(
        <nav className="nav-wrapper white">
            <div className="container">
                <Link to='/' className="brand-logo">
                    <img src={logo} width="40px"/>
                </Link>
                <SignedInLinks />
                {/* <SignedOutLinks /> */}
            </div>
        </nav>
        // <nav class="white main_nav">
        //     <div class="logo">
        //         <a href="">
        //             <img src="../img/logo.png" width="50px"/>
        //         </a>
        //     </div>
        //     <div class="search">
        //         <form>
        //             <input type="text" placeholder="Pesquisar"/>
        //             <button type="submit">→</button>
        //         </form>
                
        //     </div>
        //     <ul class="right">
        //         <li><a class="active" href="">Navegar</a></li>
        //         <li><a href="">Instituições</a></li>
        //         <li><a href="">Criadores</a></li>
        //         <li><a class="logout" href="index.html">Sair</a></li>            
        //     </ul>
        // </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar);