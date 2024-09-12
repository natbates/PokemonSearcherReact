import React from "react";
import '../styles/styles.css';
import {searchPokemon} from '../utils/pokemonAPI';

export function Header()
{
    return (
        <h1>Pokemon Searcher</h1>
    );
}


export function SearchInput()
{
    return (
        <input id = "search-input" type = "text" placeholder = "search for pokemon" required>
        </input>
    )
}


export function SearchBar()
{
    function handleClick()
    {
        let searchValue = document.getElementById("search-input");
        searchPokemon(searchValue.value);
    }

    return (
        <button id = "search-button" onClick={handleClick}>
            Search
        </button>
    )
}