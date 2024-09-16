import React, { createContext, useState, useContext } from 'react';

const FavoritePokemonsContext = createContext();

export function FavoritePokemonsProvider({ children }) 
{
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const addFavorite = (id) => {
    setFavoritePokemons((prevFavorites) => [...prevFavorites, id]);
  };

  const removeFavorite = (id) => {
    setFavoritePokemons((prevFavorites) => prevFavorites.filter(favId => favId !== id));
  };

  const isFavorite = (id) => favoritePokemons.includes(id);

  return (
    <FavoritePokemonsContext.Provider value={{ favoritePokemons, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritePokemonsContext.Provider>
  );
}

export function useFavoritePokemons() {
  return useContext(FavoritePokemonsContext);
}
