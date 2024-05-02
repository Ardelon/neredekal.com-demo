import { getPokemon } from "@/service";
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
  const stats = pokemon?.stats.map((stat, index) => {
    return (
      <li key={stat.stat.name + index}>
        <label>{stat.stat.name}</label>
        <label>{stat.base_stat}</label>
      </li>
    );
  });
  return (
    <div className="">
      {/* <Link href={`/pokemon/${pokemon?.id}`}></Link> */}
      <div className="front">
        <h1>{pokemon?.name}</h1>
        <img src={pokemon?.sprites.front_default} />
      </div>
      <div className="back">
        <ul>{stats}</ul>
      </div>
    </div>
  );
};

export default PokemonCard;
