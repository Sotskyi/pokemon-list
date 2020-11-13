import React from "react";
import { BemPrefix } from "../../utils/bem";
import typeColor from "../../utils/types-color";
import { TransitionsModal } from "../pokemon-modal/pokemon-modal";
import "./pokemon-card.scss";

const bem = BemPrefix("pokemon-card");

export const PokemonCard = ({ pokemon, clickOnType }) => {
  return (
    <div className={bem()}>
      <div className={bem("avatar-container")}>
        <TransitionsModal pokemon={pokemon}> </TransitionsModal>
        <div className={bem("avatar-container__types-wrapper")}>
          {pokemon.types.map((elem, i) => (
            <div
              onClick={clickOnType}
              style={{ backgroundColor: typeColor[elem.type.name] }}
              key={i}
              id={elem.type.name}
              className={bem("avatar-container__types-wrapper__type")}
            >
              {elem.type.name}
            </div>
          ))}
        </div>
      </div>
      <div className={bem("name")}>{pokemon.name} </div>
      <div className={bem("pokemon-stats")}>
        <div className={bem("pokemon-stats__weight")}>
          <p>Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className={bem("pokemon-stats__height")}>
          <p>Height</p>
          <p>{pokemon.height}</p>
        </div>
      </div>
    </div>
  );
};
