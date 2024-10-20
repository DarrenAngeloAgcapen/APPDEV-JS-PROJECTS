import React, { useState, useEffect } from 'react';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [openPokemonId, setOpenPokemonId] = useState(null);

  const POKEMON_PER_PAGE = 28;

  const fetchPokemons = async (pageNum = 1) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_PER_PAGE}&offset=${(pageNum - 1) * POKEMON_PER_PAGE}`);
      const data = await response.json();

      const totalPokemon = 1118;
      const pages = Math.ceil(totalPokemon / POKEMON_PER_PAGE);
      setTotalPages(pages);

      const promises = data.results.map(pokemon =>
        fetch(pokemon.url).then(res => res.json())
      );
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  useEffect(() => {
    fetchPokemons(page);
  }, [page]);

  const toggleDropdown = (pokemonId) => {
    setOpenPokemonId(openPokemonId === pokemonId ? null : pokemonId);
  };

  return (
    <div className="home">

      <div className="pokemon-grid">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <div onClick={() => toggleDropdown(pokemon.id)}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
              </div>
              {openPokemonId === pokemon.id && (
                <div className="pokemon-details">
                  <p>Weight: {pokemon.weight}</p>
                  <p>Height: {pokemon.height}</p>
                  <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
                  <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No Pokemon found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {page > 1 && (
            <button onClick={() => setPage(1)}>First Page</button>
          )}
          {page > 1 && (
            <button onClick={() => setPage(page - 1)}>Previous Page</button>
          )}
          {page < totalPages && (
            <button onClick={() => setPage(page + 1)}>Next Page</button>
          )}
          {page < totalPages && (
            <button onClick={() => setPage(totalPages)}>Last Page</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;