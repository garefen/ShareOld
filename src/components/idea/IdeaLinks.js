import React from 'react'
import{Link } from 'react-router-dom'


const IdeaLinks = () => {
    return (
        <nav className="nav-wrapper z-depth-0 white">
            <ul className="links">
            <li><Link to="/" className="green-text">Ideias</Link></li>
            <li><Link to="/" className="green-text">Instituições</Link></li>
            <li><Link to="/" className="green-text">Criadores</Link></li>
            </ul>
        </nav>
        
        )
    }
    
    export default IdeaLinks