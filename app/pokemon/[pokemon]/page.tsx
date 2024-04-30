import { IPokemon } from "@/interface/pokemonInterface";
import { getPokemon } from "@/service";

async function getData(params: string) {
  const pokemon: IPokemon = await getPokemon(params);
  return pokemon;
}

const PokemonDetailPage = async ({
  params,
}: {
  params: { pokemon: string };
}) => {
  const pokemon = await getData(params.pokemon);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <span>{pokemon.weight}</span>
    </div>
  );
};

export default PokemonDetailPage;
