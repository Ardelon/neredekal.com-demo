import { IPokemon } from "@/interface/pokemonInterface";
import { getPokemon } from "@/service";
import Link from "next/link";

interface propsInterface {
  pokemon: { name: string; url: string };
  params: { slug: string };
}

export const GalleryCard = async (props: propsInterface) => {
  const identifier =
    props.pokemon.url.split("/")[props.pokemon.url.split("/").length - 2];

  const pokemon: IPokemon = await getPokemon(identifier);

  return (
    <div>
      <Link href={`/pokemon/${identifier}`}>
        <h1>{props.pokemon.name}</h1>
        {/* <img src={pokemon.sprites.back_default} /> */}
      </Link>
    </div>
  );
};

export default GalleryCard;
