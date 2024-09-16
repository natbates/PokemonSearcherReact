
export async function searchPokemon(searchValue) {
  if (searchValue !== "") {
    const data = await getPokemonData(searchValue.toLowerCase());
    if (data)
    {
      return data;
    }
    else { 
      alert("Pokemon not found");
    }
  } else {
    alert("Please enter a Pokémon name"); // wont get called as button becomes disabled now
  }
}

export async function FetchAllPokemon() {

  const allPokemon = [];
  let pokemonId = 1;
  let hasMorePokemon = true;

  while (hasMorePokemon && pokemonId <= 150) { // how can i load one page at a time ??

    const pokemon = await getPokemonData(pokemonId);
    if (pokemon) {
      allPokemon.push({
        id: pokemonId,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      });
      
      pokemonId++; 
    } else {
      hasMorePokemon = false; 
    }
  }
  console.log("this");
  return allPokemon; 
}

async function getPokemonData(pokemonId) {
  try {
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonId}`);

    if (!response.ok) {
      throw new Error('Pokémon not found');
    }
    const data = await response.json();

    const formattedData = {
      name: data.name || 'N/A',
      id: data.id || 'N/A',
      weight: data.weight || 'N/A',
      height: data.height || 'N/A',
      types: data.types.map(typeInfo => typeInfo.type.name) || [],
      hp: data.stats.find(stat => stat.stat.name === 'hp')?.base_stat || 'N/A',
      attack: data.stats.find(stat => stat.stat.name === 'attack')?.base_stat || 'N/A',
      defense: data.stats.find(stat => stat.stat.name === 'defense')?.base_stat || 'N/A',
      specialAttack: data.stats.find(stat => stat.stat.name === 'special-attack')?.base_stat || 'N/A',
      specialDefense: data.stats.find(stat => stat.stat.name === 'special-defense')?.base_stat || 'N/A',
      speed: data.stats.find(stat => stat.stat.name === 'speed')?.base_stat || 'N/A',
      sprites: {
        front_default: data.sprites.front_default || ''
      }
    };
    return formattedData;

  } catch (error) {
    document.getElementById("search-input").value = "";
    console.log("RETURNING FALSE");
    return false;
  }
}
