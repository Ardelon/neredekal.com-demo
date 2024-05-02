import { IPokemon } from "@/interface/pokemonInterface";
import { capitalizeFirstLetter } from "@/utilities";
import Link from "next/link";
import React from "react";
import { Badge, Score } from "../uiKit";

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
          <label className="text-xl font-bold pt-3 block ">
            Height : {pokemon.height}
          </label>
        </div>
        <div>
          <label className="text-xl font-bold pt-3 block ">
            Weight : {pokemon.weight}
          </label>
        </div>
        <div>
          <label className="text-xl font-bold pt-3 block">Abilities : </label>
          {pokemon.abilities.map((ability, index) => {
            return (
              <p
                className="pl-2 font-semibold"
                key={ability.ability.name + index}
              >
                {ability.ability.name}
              </p>
            );
          })}
        </div>
        <div>
          <label className="text-xl font-bold py-3 block">Type</label>
          <div className="flex flex-row gap-2 py-2">
            {pokemon.types.map((type, index) => {
              return (
                <Badge type={type.type.name} key={type.type.name + index} />
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold py-3">
            {capitalizeFirstLetter(pokemon.name) + " Stats"}
          </h4>
          <ul>
            {pokemon?.stats.map((stat, index) => {
              return (
                <div className="" key={stat.stat.name + index}>
                  <label className="text-lg font-semibold ">
                    {capitalizeFirstLetter(stat.stat.name)}
                  </label>
                  <Score statValue={stat.base_stat} />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailLeftSide;
