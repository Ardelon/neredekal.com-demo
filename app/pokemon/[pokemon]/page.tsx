import { PokemonCard } from "@/components";
import {
  PokemonDetailDisplay,
  PokemonDetailHeader,
  PokemonDetailLeftSide,
  PokemonDetailRightSide,
} from "@/components/detail";
import { getEvolutionChain, getPokemon, getSpecies } from "@/service";
import Link from "next/link";

async function solveEvolutionChain(identifier: number) {
  const species = await getSpecies(identifier);

  if ("message" in species) {
    console.error(species.message);
    return;
  }

  const evolutionChain = await getEvolutionChain(species.evolution_chain.url);

  if ("message" in evolutionChain) {
    console.error(evolutionChain.message);
    return;
  }
  return evolutionChain;
}

async function getData(identifier: string) {
  const pokemon = await getPokemon(identifier);

  return pokemon;
}

const PokemonDetailPage = async ({
  params,
}: {
  params: { pokemon: string };
}) => {
  const pokemon = await getData(params.pokemon);

  if ("message" in pokemon) {
    console.error(pokemon.message);
    return;
  }
  const evolutionChain = await solveEvolutionChain(parseInt(params.pokemon));

  return (
    <div className="flex flex-col">
      <PokemonDetailHeader identifier={params.pokemon} />
      <div className="flex flex-row w-4/5 m-auto gap-8 justify-center">
        <PokemonDetailLeftSide pokemon={pokemon} />
        <PokemonDetailRightSide
          pokemon={pokemon}
          evolutionChain={evolutionChain}
        />
      </div>
      {/* <PokemonDetailDisplay identifier={params.pokemon}></PokemonDetailDisplay> */}
    </div>
  );
};

export default PokemonDetailPage;
