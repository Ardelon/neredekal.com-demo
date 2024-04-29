interface IPokemon {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }
  ];
  base_experience: number;
  forms: [{ name: string; url: string }];
  height: number;
  id: number;
  is_default: number;
  location_area_encounters: string;
  moves: [{ move: { name: string; url: string } }];
  name: string;
  order: number;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: [
    { base_stat: number; effort: 0; stat: { name: string; url: string } }
  ];
  types: [{ slot: number; type: { name: string; url: string } }];
  weight: number;
}
interface IPokemonList {
  next: string;
  previous: string;
  results: [{ name: string; url: string }];
}

export type { IPokemon, IPokemonList };
