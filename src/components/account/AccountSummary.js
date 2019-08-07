import React from 'react';
import { Link } from 'react-router-dom'


const AccountSummary = ({account}) => {
    return (
        <div>
            <h3>
                Gabriel Sarti
            </h3>
            <Link className="institution-account green-text" to="/">Faculdade Impacta de Tecnologia</Link>
            <blockquote>
                <h6>Discover a new world in my ideas</h6>
            </blockquote>
        </div>
    )
}

export default AccountSummary;