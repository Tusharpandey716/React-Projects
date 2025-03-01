import React, { useState } from "react";
import "./App.css";

const PokemonInfoApp = () => {
  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchPokemon = async () => {
    if (!pokemon) return;
    setError("");

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
      );
      const data = await response.json();

      if (data.name) {
        setData(data);
      } else {
        setError("Pokémon not found");
        setData(null);
      }
    } catch (err) {
      setError("Failed to fetch Pokémon data.");
    }
  };

  return (
    <div className="pokemon-container">
      <h1 className="title">Pokémon Info App</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Pokémon name or ID..."
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <button onClick={fetchPokemon}>🔍 Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {data && (
        <div className="pokemon-details">
          <h2>{data.name.toUpperCase()}</h2>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>🛡️ Type: {data.types.map(t => t.type.name).join(", ")}</p>
          <p>📏 Height: {data.height}</p>
          <p>⚖️ Weight: {data.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonInfoApp;
