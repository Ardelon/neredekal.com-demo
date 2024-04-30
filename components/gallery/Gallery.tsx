import { IPokemonList } from "@/interface/pokemonInterface";
import GalleryCard from "./GalleryCard";
import Link from "next/link";
import Button from "../button";

interface propsInterface {
  pokemonList: IPokemonList;
}

export const Gallery = (props: propsInterface) => {
  const galleryCards = props.pokemonList.results.map((pokemon) => {
    return <GalleryCard key={pokemon.name} pokemon={pokemon} />;
  });

  return (
    <section>
      {galleryCards}
      {/* <Button name={"Previous"} click={goPrevious}></Button>
      <Button name={"Next"} click={goNext}></Button> */}
      {/* <Link href={props.pokemonList.previous || ""}>
        <button>Previous</button>
      </Link>
      <Link href={props.pokemonList.next || ""}>
        <button>Next</button>
      </Link> */}
    </section>
  );
};

export default Gallery;
