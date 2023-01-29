import CardComponent from "./components/CardComponent/CardComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { pokemonList } from "./utils/getPokemonList/getPokemonList.js";

const pageContainer: HTMLElement = document.querySelector(".root");

const header = new HeaderComponent(pageContainer, "img/header-img.png");

const resolvedPokemonList = await pokemonList();

resolvedPokemonList.forEach(
  (pokemonInfo) => new CardComponent(pageContainer, pokemonInfo)
);
