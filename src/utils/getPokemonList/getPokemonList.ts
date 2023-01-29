import { getPokemonInfo } from "../getPokemonInfo/getPokemonInfo.js";
import { getPokemonPageList } from "../getPokemonPageList/getPokémonPageList.js";
import { getPokemonUrl } from "../getPokemonUrl/getPokemonUrl.js";

const pageList = await getPokemonPageList("https://pokeapi.co/api/v2/pokemon");

const numberOfPokemonsOnPage: number[] = [];
for (
  let pokemonNumber = 0;
  pokemonNumber < pageList.results.length;
  pokemonNumber++
) {
  numberOfPokemonsOnPage.push(pokemonNumber);
}

export const pokemonList = async () => {
  const pokemonList = [];

  for await (const pokemonIndex of numberOfPokemonsOnPage) {
    const pokemonUrl = await getPokemonUrl(
      "https://pokeapi.co/api/v2/pokemon",
      pokemonIndex
    );

    const pokemonInfo = await getPokemonInfo(pokemonUrl);

    pokemonList.push(pokemonInfo);
  }

  return pokemonList;
};
