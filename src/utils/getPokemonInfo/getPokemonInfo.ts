import type PokemonInfoStructure from "./PokemonInfoStructure";

export const getPokemonInfo = async (
  pokemonUrl: string
): Promise<PokemonInfoStructure> => {
  const pokemonInfoResponse = await fetch(pokemonUrl);

  const pokemonInfo =
    (await pokemonInfoResponse.json()) as PokemonInfoStructure;

  return pokemonInfo;
};
