import { IPokemon } from "@/interface/pokemonInterface";
import { IErrorResponse } from "@/interface/serviceInterface";
import { mapPokemon, mapPokemonList } from "@/mapper";
import { validatePokemonData, validatePokemonListData } from "@/validator";
import axios from "axios";

const getPokemonList = (offset: number = 0) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${process.env.POKEMON_DISPLAY_COUNT}`,
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      const [isValid, data] = validatePokemonListData(response);
      if (isValid) {
        return mapPokemonList(response);
      } else {
        console.log("Something is wrong with data source");
        return { next: "", previous: "", results: [] };
      }
    })
    .catch((error) => {
      console.log(error);
      console.log("Data source is not responding correctly");
      return { next: "", previous: "", results: [] };
    });
};

type PokemonResponse = IPokemon | IErrorResponse;

const getPokemon = (identifier: string): Promise<PokemonResponse> => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon/${identifier}`,
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      const [isValid, data] = validatePokemonData(response);

      if (isValid) return mapPokemon(data);
      else return { message: "Something is wrong with data source" };
    })
    .catch((error) => {
      console.log(error);
      return { message: "Data source is not responding correctly" };
    });
};

export { getPokemon, getPokemonList };
