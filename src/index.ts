import CardComponent from "./components/CardComponent/CardComponent.js";
import Component from "./components/Component/Component.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { pokemonList } from "./utils/getPokemonList/getPokemonList.js";

const pageContainer: HTMLElement = document.querySelector(".root");

const header = new HeaderComponent(pageContainer, "img/header-img.png");
const mainContainer = new Component(pageContainer, "main-container", "main");
mainContainer.render();

const resolvedPokemonList = await pokemonList();
resolvedPokemonList.forEach(
  (pokemonInfo) => new CardComponent(mainContainer.element, pokemonInfo)
);
