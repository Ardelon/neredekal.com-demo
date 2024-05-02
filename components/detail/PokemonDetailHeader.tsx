import Link from "next/link";
import React from "react";

interface PokemonDetailHeaderProps {
  identifier: string;
}

const PokemonDetailHeader: React.FC<PokemonDetailHeaderProps> = ({
  identifier,
}) => {
  return (
    <header className="w-4/5 m-auto justify-center">
      {parseInt(identifier) - 1 !== 0 ? (
        <Link href={`/pokemon/${parseInt(identifier) - 1}`}>Previous</Link>
      ) : (
        ""
      )}
      <span>{`${identifier} / ${process.env.POKEMON_COUNT}`}</span>
      {parseInt(identifier) + 1 <=
      parseInt(process.env.POKEMON_COUNT ?? "1025", 10) ? (
        <Link href={`/pokemon/${parseInt(identifier) + 1}`}>Next</Link>
      ) : (
        ""
      )}
    </header>
  );
};

export default PokemonDetailHeader;
