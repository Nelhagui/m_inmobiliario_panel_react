import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <>
            <nav className="navTop">
                <ul>
                    <Link to="#">
                        <li>Novedades del sistema</li>
                    </Link>
                    <Link to="/logout">
                        <li>Cerrar sesión</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}
