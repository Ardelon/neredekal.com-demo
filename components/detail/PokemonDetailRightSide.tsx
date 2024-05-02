import { IEvolutionChain } from "@/interface/evolutionChainInterface";
import { IPokemon } from "@/interface/pokemonInterface";
import { capitalizeFirstLetter, preparePokemonIdForDisplay } from "@/utilities";
import React from "react";
import PokemonCard from "./PokemonCard";

interface PokemonDetailRightSideInterface {
  evolutionChain: IEvolutionChain;
  pokemon: IPokemon;
}

const PokemonDetailRightSide: React.FC<PokemonDetailRightSideInterface> = (
  props
) => {
  console.log(props.pokemon);
  console.log(props.evolutionChain);

  const evolutionChainCards = props.evolutionChain?.species.map(
    (chain, index) => {
      return <PokemonCard key={index} chain={chain} />;
    }
  );
  return (
    <div>
      <h1>{capitalizeFirstLetter(props.pokemon.name)}</h1>
      <h2>{preparePokemonIdForDisplay(String(props.pokemon.id))}</h2>
      <br />
      <h3>Evolutionary Line</h3>
      <div className="flex flex-row">{evolutionChainCards}</div>
    </div>
  );
};

export default PokemonDetailRightSide;
