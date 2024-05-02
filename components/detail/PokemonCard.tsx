import { getPokemon } from "@/service";
import {
  preparePokemonIdForDisplay,
  stripIdentifierFromUrl,
} from "@/utilities";
import Link from "next/link";
import React from "react";

interface PokemonCardProps {
  chain: {
    name: string;
    url: string;
  };
}

async function getData(identifier: string) {
  const pokemon = await getPokemon(identifier);

  if ("message" in pokemon) {
    console.error(pokemon.message);
    return;
  }

  return pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = async (chain) => {
  const pokemon = await getData(chain.chain.name);
  return (
    <div className="">
      <Link href={`/pokemon/${pokemon?.id}`}>
        <div className="flex flex-row">
          <img src={pokemon?.sprites.front_default} />
          <div>
            <h1>{pokemon?.name}</h1>
            <span>
              {preparePokemonIdForDisplay(
                stripIdentifierFromUrl(chain.chain.url)
              )}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
