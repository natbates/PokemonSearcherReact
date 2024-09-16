import React from "react";
import { searchPokemon } from "../utils/pokemonAPI";
import { useFavoritePokemons } from "./FavouritePokemonContext";

export function Card({pokemon, handleSelectedPokemon, toggleCardVisibility, favourites}) {
    const { addFavorite, removeFavorite, isFavorite } = useFavoritePokemons();

    async function onClickCard() {
        const data = await searchPokemon(pokemon.name);
        handleSelectedPokemon(data);
        toggleCardVisibility(true);
    }

    console.log(favourites);

    return (
        <div className="Card-container">
            <button
                className="Card"
                onClick={onClickCard}
                disabled={favourites}
                style={{
                    cursor: favourites ? 'not-allowed' : 'pointer', 
                    opacity: favourites ? 0.8 : 1,
                    pointerEvents: favourites ? 'none' : 'auto'
                }}
            >
                <h2>{pokemon.name}</h2>
                <img
                    style={{
                        borderColor: isFavorite(pokemon.id) ? "gold" : "#eee",
                        borderWidth: '2px',
                        borderStyle: 'solid'
                    }}
                    src={pokemon.image}
                    alt={pokemon.name}
                />
            </button>
        </div>
    );
}
