const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=200';
const container = document.getElementById('pokemonContainer');
const searchInput = document.getElementById('searchInput');

let allPokemon = [];

// Fetch Pokémon list
async function fetchPokemonList() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const pokemonList = data.results;

        // Fetch each Pokémon's individual details for images
        const promises = pokemonList.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
                name: pokemon.name,
                image: details.sprites.front_default
            };
        });

        allPokemon = await Promise.all(promises);
        displayPokemon(allPokemon);
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        container.innerHTML = `<p>Failed to load Pokémon. Please try again later.</p>`;
    }
}

// Display Pokémon cards
function displayPokemon(pokemonList) {
    container.innerHTML = '';
    pokemonList.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <p>${pokemon.name}</p>
        `;
        container.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = allPokemon.filter(p => p.name.includes(searchTerm));
    displayPokemon(filtered);
});

// Initialize app
fetchPokemonList();
