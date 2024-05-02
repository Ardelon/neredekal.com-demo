import { IPokemon } from "@/interface/pokemonInterface";
import { getPokemon } from "@/service";
import { capitalizeFirstLetter, preparePokemonIdForDisplay } from "@/utilities";
import Link from "next/link";
import { Badge } from "../uiKit";

interface propsInterface {
  pokemon: { name: string; url: string };
}

export const GalleryCard = async (props: propsInterface) => {
  const identifier =
    props.pokemon.url.split("/")[props.pokemon.url.split("/").length - 2];

  const pokemon = await getPokemon(identifier);

  if ("message" in pokemon) {
    console.error(pokemon.message);
    return;
  }

  return (
    <div className="w-64 p-2 border-2 border-[#3865d2]   rounded-lg ">
      <Link href={`/pokemon/${identifier}`}>
        <img className="w-60 h-60" src={pokemon.sprites.front_default} />

        <div>
          <h2 className="font-bold text-2xl">
            {capitalizeFirstLetter(props.pokemon.name)}
          </h2>
          <h3 className="font-semibold text-xl pt-1">
            {preparePokemonIdForDisplay(String(pokemon.id))}
          </h3>
        </div>
        <div className="flex flex-row gap-2 py-4">
          {pokemon.types.map((type, index) => {
            return <Badge key={index} type={type.type.name} />;
          })}
        </div>
      </Link>
    </div>
  );
};

export default GalleryCard;
