import React from "react";
import findLargest from "./helper.js";
import PokeCard from "./PokeCard.jsx";
import pokemons from "./pokemons.js";

import "./styles.css";

class App extends React.Component {
  experiences = [];
  names = [];
  render() {
    const pokemonCards = pokemons.map((pokemon, index) => {
      this.experiences.push(pokemon.exp);

      if (findLargest(this.experiences) === pokemon.exp) {
        this.names.push(pokemon.name);
      }
      return (
        <PokeCard
          name={pokemon.name}
          id={pokemon.id}
          type={pokemon.type}
          exp={pokemon.exp}
          key={index}
        />
      );
    });

    const bestExperience = this.names[this.names.length - 1];
    return (
      <div className="App">
        <h1 className="App-title">PokeDex</h1>
        <p className="winner-name">{bestExperience} won</p>
        <section className="container">{pokemonCards}</section>
      </div>
    );
  }
}

export default App;
