let logo = "images/pokeball.jpg";
const logoElement = document.querySelector("img")
logoElement.setAttribute('src',logo);
logoElement.setAttribute('alt', 'pokedex logo');
const pokemonList = document.querySelector("#pokemonList");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";


const fetchPokemon = async () => {
  for (let i = 1; i <= 151; i++) {
    const response = await fetch(URL + i);
    const data = await response.json();
    showPokemon(data);
  }
};

fetchPokemon();

function showPokemon(pokeData) {

  let type = pokeData.types.map((type) => `<p class="${type.type.name} type">${type.type.name}</p>`);
  type = type.join('');

  let pokeId = pokeData.id.toString();
  if (pokeId.length === 1) {
      pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
      pokeId = "0" + pokeId;
  }


  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
      <p class="pokemon-id-background">#${pokeId}</p>
      <div class="pokemonImg">
          <img src="${pokeData.sprites.other["official-artwork"].front_default}" alt="${pokeData.name}">
      </div>
      <div class="pokemonInfo">
          <div class="container-name">
              <p class="pokemon-id">#${pokeId}</p>
              <h2 class="pokemon-name">${pokeData.name}</h2>
          </div>
          <div class="type">
              ${type}
          </div>
          <div class="pokemon-stats">
              <p class="stat">${pokeData.height}m</p>
              <p class="stat">${pokeData.weight}kg</p>
          </div>
      </div>
  `;
  pokemonList.append(div);
}

botonesHeader.forEach(boton => boton.addEventListener("click", async (event) => {
  const botonId = event.currentTarget.id;

  pokemonList.innerHTML = "";

  for (let i = 1; i <= 151; i++) {
    const response = await fetch(URL + i);
    const data = await response.json();

    if(botonId === "see-all") {
      showPokemon(data);
    } else {
      const type = data.types.map(type => type.type.name);
      if (type.some(tipo => tipo.includes(botonId))) {
        showPokemon(data);
      }
    }
  }
}));