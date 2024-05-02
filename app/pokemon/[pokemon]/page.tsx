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

  // const evolutionChainCards = evolutionChain?.species.map((chain, index) => {
  //   return <PokemonCard key={index} chain={chain} />;
  // });

  return (
    <div className="flex flex-col">
      <PokemonDetailHeader identifier={params.pokemon} />
      <div className="flex flex-row">
        <PokemonDetailLeftSide pokemon={pokemon} />
        <PokemonDetailRightSide evolutionChain={evolutionChain} />
      </div>
      {/* <PokemonDetailDisplay identifier={params.pokemon}></PokemonDetailDisplay> */}
      {/* <div className="flex flex-row gap-8">{evolutionChainCards}</div> */}
    </div>
  );
};

export default PokemonDetailPage;
