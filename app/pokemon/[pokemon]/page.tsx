import { PokemonCard } from "@/components";
import {
  PokemonDetailDisplay,
  PokemonDetailHeader,
  PokemonDetailLeftSide,
  PokemonDetailRightSide,
  PokemonNotFound,
} from "@/components/detail";
import { getEvolutionChain, getPokemon, getSpecies } from "@/service";
import Link from "next/link";

async function solveEvolutionChain(identifier: number) {
  const species = await getSpecies(identifier);

  if ("message" in species) {
    console.error(species.message);
    return species;
  }

  const evolutionChain = await getEvolutionChain(species.evolution_chain.url);

  if ("message" in evolutionChain) {
    console.error(evolutionChain.message);
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
    return <PokemonNotFound />;
  }

  const evolutionChain = await solveEvolutionChain(pokemon.id);

  return (
    <div className="flex flex-col">
      <PokemonDetailHeader identifier={params.pokemon} />
      <div className="flex md:flex-row flex-col w-4/5 m-auto gap-8 justify-center ">
        <PokemonDetailLeftSide pokemon={pokemon} />
        <PokemonDetailRightSide
          pokemon={pokemon}
          evolutionChain={evolutionChain}
        />
      </div>
    </div>
  );
};

export default PokemonDetailPage;
