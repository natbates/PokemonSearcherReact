
export function searchPokemon(searchValue) {
  if (searchValue !== "") {
    getPokemonData(searchValue.toLowerCase());
  } else {
    alert("Please enter a Pokémon name");
  }
}

async function getPokemonData(pokemon) {
  try {
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
    
    // Check if the response status is not OK (200)
    if (!response.ok) {
      throw new Error('Pokémon not found');
    }

    const data = await response.json();
    displayData(data);
  } catch (error) {
    document.getElementById("search-input").value = "";
    alert(error.message);
  }
}

function displayData(data) {

  console.log(Object.keys(data).length);
  console.log("done");
  clearType();


  if (Object.keys(data).length === 0) {
    alert("Pokémon not found");
  } else {
    document.getElementById('types').innerHTML = "";
    // Update HTML elements with Pokémon data
    document.getElementById('pokemon-name').textContent = `${data.name.toUpperCase() || 'N/A'}`;
    document.getElementById('pokemon-id').textContent = `${data.id || 'N/A'}`;
    document.getElementById('weight').textContent = `${data.weight || 'N/A'}`;
    document.getElementById('height').textContent = `${data.height || 'N/A'}`;

    // Check if types exist and map them
    if (data.types && Array.isArray(data.types)) {
      data.types.forEach(type => {addType(type);});
    } else {
      document.getElementById('types').textContent = 'N/A';
    }

    // Check if stats exist and reduce them
    if (data.stats && Array.isArray(data.stats)) {
      const stats = data.stats.reduce((acc, stat) => {
        acc[stat.stat.name] = stat.base_stat;
        return acc;
      }, {});

      document.getElementById('hp').textContent = `${stats.hp || 'N/A'}`;
      document.getElementById('attack').textContent = `${stats.attack || 'N/A'}`;
      document.getElementById('defense').textContent = `${stats.defense || 'N/A'}`;
      document.getElementById('special-attack').textContent = `${stats['special-attack'] || 'N/A'}`;
      document.getElementById('special-defense').textContent = `${stats['special-defense'] || 'N/A'}`;
      document.getElementById('speed').textContent = `${stats.speed || 'N/A'}`;
    } else {
      document.getElementById('hp').textContent = 'N/A';
      document.getElementById('attack').textContent = 'N/A';
      document.getElementById('defense').textContent = 'N/A';
      document.getElementById('special-attack').textContent = 'N/A';
      document.getElementById('special-defense').textContent = 'N/A';
      document.getElementById('speed').textContent = 'N/A';
    }
    addImageToPage(data.sprites.front_default, data.name);
  }
}


function addImageToPage(image, name)
{

  const existingImg = document.getElementById('sprite');
  if (existingImg) {
    existingImg.remove();
  }

  const img = document.createElement('img');

  img.id = "sprite";

  img.src = image;

  img.alt = 'Image of ' + name;

  document.getElementById('image-container').appendChild(img);
}


function addType(data)
{

  console.log(data.type.name);

  const newType = document.createElement("p")

  newType.textContent = data.type.name.toUpperCase();

  document.getElementById('types').appendChild(newType);

}

function clearType()
{

  document.getElementById('types').innerHTML = "?";

  Array.from(document.getElementById('types').children).forEach(child => {
    child.remove();
  }); 
}