import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { FetchPokemon, PokemonOnNextPageExist } from "../utils/pokemonAPI";
import { useFavoritePokemons } from "./FavouritePokemonContext";
import { LoadingImage } from "./LoadingImage"

export function Pokedex({handleSelectedPokemon, toggleCardVisibility }) {
    
    const { addFavorite, removeFavorite, isFavorite } = useFavoritePokemons();
    const [pagePokemon, setAllPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [loading, setLoading] = useState(false); // Loading state
    const pokemonPerPage = 15;

    async function loadPokemon() {
        setLoading(true); // Start loading
        try {
            const startID = currentPage * pokemonPerPage + 1;
            const endID = (currentPage + 1) * pokemonPerPage;
            const fetchedPokemons = await FetchPokemon(startID, endID);

            setAllPokemon(fetchedPokemons);
            // Check if there's a next page
            const nextPageExists = await PokemonOnNextPageExist(endID + 1);
            setHasNextPage(nextPageExists);
        } catch (error) {
            alert("Failed to load Pokémon data:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    }

    useEffect(() => {
        loadPokemon();
    }, [currentPage]);

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (hasNextPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <h2>Pokedex</h2>
            {loading ? (
                <LoadingImage /> // Display loading message, change to cool image
            ) : (
                <div className="Card-container">
                    {pagePokemon.map((pokemon) => (
                        <Card
                            key={pokemon.id}
                            pokemon={pokemon}
                            favourites={false}
                            handleSelectedPokemon={handleSelectedPokemon}
                            toggleCardVisibility={toggleCardVisibility}
                        />
                    ))}
                </div>
            )}
            <div className="nav-buttons">
                <button
                    className="nav-button"
                    onClick={handlePrevious}
                    disabled={currentPage === 0 || loading}
                >
                    Left
                </button>
                <button
                    className="nav-button"
                    onClick={handleNext}
                    disabled={!hasNextPage || loading}
                >
                    Right
                </button>
            </div>
        </div>
    );
}
