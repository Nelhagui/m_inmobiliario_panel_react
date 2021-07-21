import React from 'react';
import './SideBarMenu.css';
import { Link } from 'react-router-dom';

export const SideBarMenu = () => {
    return (
        <div className="content_sidebarnav">
            <nav>
                <ul>
                    <Link to="/">
                        <li>Resumen</li>
                    </Link>
                    <Link to="/entradas">
                        <li>Entradas</li>
                    </Link>
                    <Link to="/categorias">
                        <li>Categorías</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
