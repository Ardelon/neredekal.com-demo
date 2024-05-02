import { IPokemon } from "@/interface/pokemonInterface";
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
        <img src={pokemon.sprites.front_default} />
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
          <label>Type</label>
          {pokemon.types.map((type, index) => {
            return <div key={type.type.name + index}>{type.type.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailLeftSide;
