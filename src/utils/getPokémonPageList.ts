import type { PageResponseStructure } from "./pageResponseStructure";

export const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon";
export const numberOfpreviousPokemon = 20;
export const pokemonApiNexPageUrl = `${pokemonApiUrl}/pokemon?offset=${numberOfpreviousPokemon}&limit=20"`;

export const getPokemonPageList = async (
  url: string
): Promise<PageResponseStructure> => {
  const response = await fetch(url);
  const pokemonPageList = (await response.json()) as PageResponseStructure;
  console.log(pokemonPageList);

  return pokemonPageList;
};
