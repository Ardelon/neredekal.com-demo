import Link from "next/link";
import React from "react";

interface PokemonCardProps {
  pokemonName: string;
  description: string;
  image?: string;
  link?: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemonName,
  description,
  image,
  link,
}) => {
  return (
    <div className="">
      {image && <img src={image} alt={`${pokemonName} image`} />}
      <h2>{pokemonName}</h2>
      <p>{description}</p>
      <Link href={`/pokemon/${pokemonName}`}></Link>
    </div>
  );
};

export default PokemonCard;
