import { getPokemonPageList } from "../getPokemonPageList/getPokémonPageList.js";

export const getPokemonUrl = async (
  pageList: string,
  pokemonIndex: number
): Promise<string> => {
  const pokemonUrl: string = (await getPokemonPageList(pageList)).results[
    pokemonIndex
  ].url;

  return pokemonUrl;
};
