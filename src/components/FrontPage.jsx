import React from 'react';
import { useState } from 'react';

import {SearchInput} from './SearchInput';
import {Header } from './Header';
import {Information} from './Information';
import {Pokedex } from './Pokedex';

function FrontPage() {

  const [valid, setValid] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const toggleCardVisibility = (value) => {
    setValid(value);
    console.log("Value " + value);
  }

  const handleSelectedPokemon = (pokemon) =>
  {
    toggleCardVisibility(true);
    setCurrentPokemon(pokemon);
  }

  return (
    <div className="App">
      <Header />
      <SearchInput handleSelectedPokemon = {handleSelectedPokemon} toggleCardVisibility = {toggleCardVisibility}/>
      <Information pokemon = {currentPokemon} isVisible = {valid}/>
      <Pokedex favourites = {false} handleSelectedPokemon = {handleSelectedPokemon} toggleCardVisibility = {toggleCardVisibility}/>
    </div>
  );
}

export default FrontPage;