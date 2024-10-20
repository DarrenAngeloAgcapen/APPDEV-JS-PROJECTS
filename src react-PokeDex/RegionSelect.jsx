import React, { useState, useEffect } from 'react';

const RegionSelect = ({ onPokemonSelect }) => {
  const regions = [
    { name: 'kanto', id: 2 }, 
    { name: 'johto', id: 3 }, 
    { name: 'hoenn', id: 4 }, 
    { name: 'sinnoh', id: 5 }
  ];

  const [pokemons, setPokemons] = useState([]);
  const [region, setRegion] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [openPokemonId, setOpenPokemonId] = useState(null);

  const POKEMON_PER_PAGE = 28;

  const fetchRegionPokemon = async (regionId, pageNum = 1) => {
    try {
      const regionData = await fetch(`https://pokeapi.co/api/v2/pokedex/${regionId}`).then(res => res.json());
      const pokemonEntries = regionData.pokemon_entries;

      const totalPokemon = pokemonEntries.length;
      const pages = Math.ceil(totalPokemon / POKEMON_PER_PAGE);
      setTotalPages(pages);

      const start = (pageNum - 1) * POKEMON_PER_PAGE;
      const end = pageNum * POKEMON_PER_PAGE;

      const selectedEntries = pokemonEntries.slice(start, end);

      const promises = selectedEntries.map(entry =>
        fetch(entry.pokemon_species.url.replace('pokemon-species', 'pokemon')).then(res => res.json())
      );
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {
      console.error('Error fetching region Pokémon:', error);
    }
  };

  useEffect(() => {
    if (region) {
      fetchRegionPokemon(region.id, page);
    }
  }, [region, page]); //refetch when page changes

  const toggleDropdown = (pokemonId) => {
    setOpenPokemonId(openPokemonId === pokemonId ? null : pokemonId);
  };

  return (
    <div className="region-select">
      <h2>Select a Region</h2>
      <div className="region-buttons">
        {regions.map((regionItem) => (
          <button
            key={regionItem.id}
            className={region && region.id === regionItem.id ? 'active' : ''} //active class
            onClick={() => {
              setPage(1); //reset page when region channges
              setRegion(regionItem);
              fetchRegionPokemon(regionItem.id, 1);
            }}
          >
            {regionItem.name.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="pokemon-grid">
        {pokemons.length > 0 ? (
          pokemons.map(pokemon => (
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
          region && <p>No Pokémon found for this region.</p>
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

export default RegionSelect;
