import { capitalizeFirstLetter, preparePokemonIdForDisplay } from "@/utilities";
import Link from "next/link";
import React from "react";
import { Badge } from "../uiKit";
import { getPokemon } from "@/service";

interface PokemonNotFoundProps {
  identifier: number;
}

const PokemonNotFound: React.FC<PokemonNotFoundProps> = async ({
  identifier,
}) => {
  const pokemon = await getPokemon(String(identifier));

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
            {capitalizeFirstLetter(pokemon.name)}
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

export default PokemonNotFound;
