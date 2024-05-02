import { IEvolutionChain } from "@/interface/evolutionChainInterface";
import React from "react";

interface PokemonDetailRightSideInterface {
  evolutionChain: IEvolutionChain;
}

const PokemonDetailRightSide: React.FC<PokemonDetailRightSideInterface> = ({
  evolutionChain,
}) => {
  return <div>Right</div>;
};

export default PokemonDetailRightSide;
