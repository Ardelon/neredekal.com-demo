import { Gallery, GallerySkeleton } from "@/components";
import { getPokemonList } from "@/service";
import { IPokemon } from "@/interface/pokemonInterface";
const PokemonGalleryPage = async () => {
  const data = await getPokemonList();
  console.log(data);

  if (!data) return <GallerySkeleton></GallerySkeleton>;
  return <Gallery></Gallery>;
};

export default PokemonGalleryPage;
