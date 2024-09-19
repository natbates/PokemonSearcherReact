import React from "react";
import { Link } from 'react-router-dom';
import '../styles/nav.css';


export function Header()
{
    return (
        <div>
            <h1 style={{marginBottom: 20}}><b>Pokemon Searcher</b></h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>
                </ul>
            </nav>
        </div>
    );
}