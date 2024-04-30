import { Gallery, GallerySkeleton } from "@/components";
import { getPokemonList } from "@/service";
import { IPokemon, IPokemonList } from "@/interface/pokemonInterface";
import { useState } from "react";
const PokemonGalleryPage = async () => {
  const pokemonList: IPokemonList = await getPokemonList(0);

  if (!pokemonList) return <GallerySkeleton></GallerySkeleton>;
  return <Gallery pokemonList={pokemonList}></Gallery>;
};

export default PokemonGalleryPage;
