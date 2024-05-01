import { IPokemon } from "@/interface/pokemonInterface";
import { getPokemon } from "@/service";
import Image from "next/image";

async function getData(params: string) {
  const pokemon = await getPokemon(params);

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

  console.log(pokemon);
  return <div></div>;
};

export default PokemonDetailPage;
