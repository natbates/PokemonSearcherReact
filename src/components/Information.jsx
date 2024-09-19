import React from "react";
import { useFavoritePokemons } from './FavouritePokemonContext';
import '../styles/info.css';


export function Information({ pokemon, isVisible }) {
    if (!pokemon || !isVisible) {
        return null; 
    }

    const { addFavorite, removeFavorite, isFavorite } = useFavoritePokemons();

    const FavouritePokemon = () => {

    if (isFavorite(pokemon.id)) {
        removeFavorite(pokemon.id);
        } else {
        addFavorite(pokemon.id);
        }
    };


    return (
        <div className="Info" style={{ display: isVisible ? 'flex' : 'none' }}>
          <div className="content">
            <h2><b>Pokemon Name: <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span></b></h2>
            <br></br>
            <p><strong>ID:</strong> <span>{pokemon.id}</span></p>
            <p><strong>Weight:</strong> <span>{pokemon.weight}</span></p>
            <p><strong>Height:</strong> <span>{pokemon.height}</span></p>
            <p><strong>Types:</strong> <span>{pokemon.types.join(', ')}</span></p>
            <p><strong>HP:</strong> <span>{pokemon.hp}</span></p>
            <p><strong>Attack:</strong> <span>{pokemon.attack}</span></p>
            <p><strong>Defense:</strong> <span>{pokemon.defense}</span></p>
            <p><strong>Special-Attack:</strong> <span>{pokemon.specialAttack}</span></p>
            <p><strong>Special-Defense:</strong> <span>{pokemon.specialDefense}</span></p>
            <p><strong>Speed:</strong> <span>{pokemon.speed}</span></p>
            <button onClick={FavouritePokemon} className="Fav">
              {isFavorite(pokemon.id) ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
          <div className="image-container">
            <img 
              style={{ borderColor: isFavorite(pokemon.id) ? "gold" : "black" }} 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} 
            />
          </div>
        </div>
    );
};
    
