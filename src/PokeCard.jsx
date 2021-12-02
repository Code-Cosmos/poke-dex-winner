import React, { Component } from "react";

import "./styles.css";

class PokeCard extends Component {
  render() {
    const { name, type, exp, id } = this.props;
    let actualId = "";
    if (id < 10) {
      actualId += "00" + id;
    } else if (id >= 100) {
      actualId += id;
    } else {
      actualId += "0" + id;
    }
    return (
      <div className="Poke-Card">
        <div className="pokemon-container">
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${actualId}.png`}
            alt="img that appperarts"
            className="pokemon-img"
          />
          <h1 className="pokemon-name">{name}</h1>
        </div>

        <div className="pokemon-statistics">
          <h2 className="pokemon-type">Type: {type}</h2>
          <h2 className="pokemon-exp">Exp: {exp}%</h2>
        </div>
      </div>
    );
  }
}
export default PokeCard;
