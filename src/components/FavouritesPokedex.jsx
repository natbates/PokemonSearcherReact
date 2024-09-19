import React, { useEffect, useState } from "react";
import { FetchAllPokemon } from "../utils/pokemonAPI";
import { useFavoritePokemons } from "./FavouritePokemonContext";
import { LoadingImage } from "./LoadingImage";
import { Card } from "./Card"; // Import Card component

export function Favourites()
{
    const { addFavorite, removeFavorite, isFavorite } = useFavoritePokemons();
    const [allPokemon, setAllPokemon] = useState([]);
    const [displayedPokemons, setDisplayedPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true); // Set to true initially
    const pokemonPerPage = 15;

    useEffect(() => {
        async function loadPokemon() {
            setLoading(true); // Start loading
            try {
                const fetchedPokemons = await FetchAllPokemon();
                const filteredPokemons = fetchedPokemons.filter(pokemon => isFavorite(pokemon.id));
                setAllPokemon(filteredPokemons);
                setDisplayedPokemons(filteredPokemons.slice(0, pokemonPerPage));
            } catch (error) {
                alert("Failed to load Pokémon data:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        }

        loadPokemon();
    }, [isFavorite]); // Reload when favorites change

    useEffect(() => {
        if (!loading) {
            const startIdx = currentPage * pokemonPerPage;
            const endIdx = startIdx + pokemonPerPage;
            setDisplayedPokemons(allPokemon.slice(startIdx, endIdx));
        }
    }, [currentPage, allPokemon, loading]);

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

    return (
        <div>
            <h2>Pokedex</h2>
            {loading ? (
                <LoadingImage /> // Display loading message or spinner
            ) : (
                <div className="Card-container">
                    {displayedPokemons.map((pokemon) => (
                        <Card
                            key={pokemon.id}
                            pokemon={pokemon}
                            favourites={true}
                            handleSelectedPokemon={null}
                            toggleCardVisibility={null}
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
                    disabled={(currentPage + 1) * pokemonPerPage >= allPokemon.length || loading}
                >
                    Right
                </button>
            </div>
        </div>
    );
}
