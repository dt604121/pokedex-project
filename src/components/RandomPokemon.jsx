import { useState, useEffect } from 'react';

function RandomPokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  function getRandomPokemonId() {
    return Math.floor(Math.random() * 1010) + 1
  }
  useEffect(() => {
    async function fetchRandomPokemon() {
      const id = getRandomPokemonId();
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (!response.ok) throw new Error("Failed to fetch Pokemon");
        
        const data = await response.json();
        setPokemon(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setPokemon(null);
      }
    }

    fetchRandomPokemon();
  }, []);

  if (error) {
    return <p style={{ color: 'red'}}>{error}</p>;
  }

  if (!pokemon) {
    return <p>Loading random Pokémon</p>;
  }

  return (
    <>
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
      </div>
    </>
  )
}

export default RandomPokemon;
