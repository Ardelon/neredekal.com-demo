import { PokemonCard } from "@/components";
import { getEvolutionChain, getSpecies } from "@/service";

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

const PokemonDetailPage = async ({
  params,
}: {
  params: { pokemon: string };
}) => {
  const evolutionChain = await solveEvolutionChain(parseInt(params.pokemon));

  const evolutionChainCards = evolutionChain?.species.map((chain, index) => {
    console.log(chain);
    return <PokemonCard key={index} chain={chain} />;
  });

  return <div>{evolutionChainCards}</div>;
};

export default PokemonDetailPage;
