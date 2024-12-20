const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poisen: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#f5f5f5',
  fighting: '#e6e0d4',
  normal: '#f5f5f5',
};

const main_types = Object.keys(colors);
// console.log(main_types);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data);
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  // make uppercase the first letter of the name
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  // make 3 digit number of id
  const id = pokemon.id.toString().padStart(3, '0');

  // get the type of the pokemon
  const poke_types = pokemon.types.map((type) => type.type.name);
  // pokemon.types is an array of objects, so we map it to get the type name
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  // find the first type that is in the main_types array
  // -1 means not found, so if it is found it will be greater than
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHtml = `        
    <div class="img-container">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png"
        alt="${name}"
      />
        
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHtml;

  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
