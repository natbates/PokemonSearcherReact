import React, { useState } from "react";
import { searchPokemon } from '../utils/pokemonAPI';


export function SearchInput({handleSelectedPokemon, toggleCardVisibility}) {

    const [input, setInput] = useState("");

    async function handleClick() 
    {
        if (input.trim()) {    
            // Await the result of searchPokemon
            const result = await searchPokemon(input);
            if (result) {
                handleSelectedPokemon(result);
            } else {
                toggleCardVisibility(false); // Hide the card if the result is false
            }
        }
    }

    const isInputValid = input.trim().length > 0;

    return (
        <div>
            <input
                id="search-input"
                value={input}
                onChange={(event) => {setInput(event.target.value); }} 
                type="text"
                placeholder="Search for a Pokémon"
                required
            />
            <button
                id="search-button"
                onClick={handleClick}
                disabled={!isInputValid}
            >
                Search
            </button>
        </div>
    );
}
