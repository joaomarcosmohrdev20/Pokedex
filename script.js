document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.querySelector('.pokedex-container');

    const pokemons = [
        {
            id: 3,
            name: 'Venusaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
            types: ['grass', 'poison']
        },
        {
            id: 4,
            name: 'Charmander',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
            types: ['fire']
        },
        {
            id: 6,
            name: 'Charizard',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
            types: ['fire', 'flying']
        },
        {
            id: 9,
            name: 'Blastoise',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
            types: ['water']
        },
        {
            id: 65,
            name: 'Alakazam',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
            types: ['psychic']
        },
        {
            id: 144,
            name: 'Articuno',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png',
            types: ['ice', 'flying']
        },
        {
            id: 150,
            name: 'Mewtwo',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
            types: ['psychic']
        },

        {

            id: 493,
            name: 'Arceus',
            image: 'https://www.google.com/imgres?q=arceus%20image%20url&imgurl=https%3A%2F%2Fwww.pikpng.com%2Fpngl%2Fm%2F285-2856939_shiny-arceus-arceus-pokemon-clipart.png&imgrefurl=https%3A%2F%2Fwww.pikpng.com%2Fpngvi%2FiToobim_shiny-arceus-arceus-pokemon-clipart%2F&docid=ENrHpCjDMinMlM&tbnid=dXGTPDepuZVpcM&vet=12ahUKEwi5zb6S5OWOAxUNpJUCHTZ-IU8QM3oECCQQAA..i&w=840&h=878&hcb=2&ved=2ahUKEwi5zb6S5OWOAxUNpJUCHTZ-IU8QM3oECCQQAA',
            types: ['normal']

        },

        

    ];

    const createPokemonCard = (pokemon) => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.image;
        pokemonImage.alt = pokemon.name;

        const pokemonId = document.createElement('p');
        pokemonId.classList.add('pokemon-id');
        pokemonId.textContent = `#${String(pokemon.id).padStart(3, '0')}`;

        const pokemonName = document.createElement('h2');
        pokemonName.classList.add('pokemon-name');
        pokemonName.textContent = pokemon.name;

        const pokemonTypes = document.createElement('div');
        pokemonTypes.classList.add('pokemon-types');
        pokemon.types.forEach(type => {
            const typeBadge = document.createElement('span');
            typeBadge.classList.add('type-badge', type); // Adiciona a classe do tipo para estilização
            typeBadge.textContent = type;
            pokemonTypes.appendChild(typeBadge);
        });

        card.appendChild(pokemonImage);
        card.appendChild(pokemonId);
        card.appendChild(pokemonName);
        card.appendChild(pokemonTypes);

        pokedexContainer.appendChild(card);
    };

    pokemons.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
});