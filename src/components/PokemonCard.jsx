import React from "react";
import '../styles/styles.css';


export function Card()
{
    return (
        <div class="card">
            <h2>Pokemon Name: <span id="pokemon-name">?</span></h2>
            <p><strong>ID:</strong> <span id="pokemon-id">?</span></p>
            <p><strong>Weight:</strong> <span id="weight">?</span></p>
            <p><strong>Height:</strong> <span id="height">?</span></p>
            <p><strong>Types:</strong> <span id="types">?</span></p>
            <p><strong>HP:</strong> <span id="hp">?</span></p>
            <p><strong>Attack:</strong> <span id="attack">?</span></p>
            <p><strong>Defense:</strong> <span id="defense">?</span></p>
            <p><strong>Special-Attack:</strong> <span id="special-attack">?</span></p>
            <p><strong>Special-Defense:</strong> <span id="special-defense">?</span></p>
            <p><strong>Speed:</strong> <span id="speed">?</span></p>

            <div id="image-container"></div>
        </div>
    );
}