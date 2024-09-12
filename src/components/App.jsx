import React from 'react';
import {Header, SearchBar, SearchInput} from './Menu';
import {Card} from './PokemonCard';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchInput />
      <SearchBar />
      <Card/>
    </div>
  );
}

export default App;
