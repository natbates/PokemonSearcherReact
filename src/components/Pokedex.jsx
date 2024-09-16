import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { FetchAllPokemon } from "../utils/pokemonAPI";
import { useFavoritePokemons } from "./FavouritePokemonContext";


export function Pokedex({favourites, handleSelectedPokemon, toggleCardVisibility}) 
{
    const { addFavorite, removeFavorite, isFavorite } = useFavoritePokemons();
    const [allPokemon, setAllPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const pokemonPerPage = 10;

    useEffect(() => {
        async function loadPokemon() {
            let fetchedPokemons = await FetchAllPokemon();

            console.log("FAVOURITE STATUS IS " + favourites);
            if (favourites) {
                console.log("FETCHING FAVS");
                // Filter Pokémon based on favorites
                fetchedPokemons = fetchedPokemons.filter(pokemon => isFavorite(pokemon.id));
            }

            setAllPokemon(fetchedPokemons); 
        }

        loadPokemon();
    }, [favourites]);

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if ((currentPage + 1) * pokemonPerPage < allPokemon.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const currentPokemons = allPokemon.slice(currentPage * pokemonPerPage, (currentPage + 1) * pokemonPerPage);

    return (
        <div>
            <h2>Pokedex</h2>
            <div className="Card-container">
                {currentPokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} favourites = {favourites} handleSelectedPokemon = {handleSelectedPokemon} toggleCardVisibility = {toggleCardVisibility} />
                ))}
            </div>
            <div className="nav-buttons">
                <button className="nav-button" onClick={handlePrevious} disabled={currentPage === 0}>
                    Left
                </button>
                <button className="nav-button" onClick={handleNext} disabled={(currentPage + 1) * pokemonPerPage >= allPokemon.length}>
                    Right
                </button>
            </div>
        </div>
    );
}
