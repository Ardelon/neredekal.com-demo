const mapPokemonList = (response: any) => {
  const data = JSON.stringify(response.data);
  return data;
};

const mapPokemon = (response: any) => {
  const data = JSON.stringify(response.data);
  return data;
};

export { mapPokemon, mapPokemonList };
