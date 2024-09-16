import React from "react";
import { Link } from 'react-router-dom';

export function Header()
{
    return (
        <div>
            <h1>Pokemon Searcher</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>
                </ul>
            </nav>
        </div>
    );
}