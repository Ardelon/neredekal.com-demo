import { IPokemon } from "@/interface/pokemonInterface";
import { capitalizeFirstLetter } from "@/utilities";
import Link from "next/link";
import React from "react";

interface PokemonDetailLeftSideInterface {
  pokemon: IPokemon;
}

const PokemonDetailLeftSide: React.FC<PokemonDetailLeftSideInterface> = ({
  pokemon,
}) => {
  return (
    <div className="flex flex-col">
      <div>
        <img className="w-96 h-96" src={pokemon.sprites.front_default} />
      </div>
      <div>
        <div>
          <label>Height</label>
          <span>{pokemon.height}</span>
        </div>
        <div>
          <label>Weight</label>
          <span>{pokemon.weight}</span>
        </div>
        <div>
          <label>Abilities</label>
          {pokemon.abilities.map((ability, index) => {
            return (
              <Link
                key={ability.ability.name + index}
                href={ability.ability.url}
              >
                {ability.ability.name}
              </Link>
            );
          })}
        </div>
        <div>
          <label>Type</label>
          {pokemon.types.map((type, index) => {
            return <div key={type.type.name + index}>{type.type.name}</div>;
          })}
        </div>
        <div>
          <label>{capitalizeFirstLetter(pokemon.name) + " Stats"}</label>
          {pokemon?.stats.map((stat, index) => {
            return (
              <li key={stat.stat.name + index}>
                <label>{capitalizeFirstLetter(stat.stat.name)}</label>
                <label>{stat.base_stat}</label>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailLeftSide;
