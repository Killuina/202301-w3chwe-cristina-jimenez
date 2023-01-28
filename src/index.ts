import Component from "./components/Component/Component.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import {
  getPokemonPageList,
  pokemonApiUrl,
} from "./utils/getPokémonPageList.js";

const pageContainer: HTMLElement = document.querySelector(".root");

const header = new HeaderComponent(pageContainer, "img/header-img.png");

console.log(getPokemonPageList(pokemonApiUrl));
