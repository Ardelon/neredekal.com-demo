import { Gallery, GallerySkeleton } from "@/components";
import { getPokemonList } from "@/service";
import { IPokemonList } from "@/interface/pokemonInterface";
import { Pagination } from "@/components/gallery";

async function fetchPokemons(page: number) {
  const limit: number = parseInt(process.env.POKEMON_DISPLAY_COUNT ?? "20", 10);
  const offset = (page - 1) * limit;
  const pokemonList: IPokemonList = await getPokemonList(offset);

  return {
    pokemonList,
    totalPages: Math.ceil(
      parseInt(process.env.POKEMON_COUNT ?? "1302", 10) / limit
    ),
    currentPage: page,
  };
}

const PokemonGalleryPage = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const page = parseInt(searchParams.page ?? "1", 10);

  const {
    pokemonList,
    totalPages,
    currentPage = 20,
  } = await fetchPokemons(page);
  // const pokemonList: IPokemonList = await getPokemonList(0);
  if (!pokemonList) return;
  <div>
    <GallerySkeleton></GallerySkeleton>;
    <Pagination currentPage={currentPage} totalPages={totalPages}></Pagination>
  </div>;
  return (
    <div>
      <Gallery pokemonList={pokemonList}></Gallery>;
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      ></Pagination>
    </div>
  );
};

export default PokemonGalleryPage;
