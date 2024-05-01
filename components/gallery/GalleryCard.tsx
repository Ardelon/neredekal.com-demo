import { IPokemon } from "@/interface/pokemonInterface";
import { getPokemon } from "@/service";
import Link from "next/link";

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
    <div className="w-60 border-2   ">
      <Link href={`/pokemon/${identifier}`}>
        <div className="flex flex-row">
          <div>
            <h1>{props.pokemon.name}</h1>
            <img className="w-24 h-24" src={pokemon.sprites.front_default} />
          </div>
          <div>
            {pokemon.types.map((type, index) => {
              return <div key={index}>{type.type.name}</div>;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GalleryCard;
