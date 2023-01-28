import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import {
  getPokemonPageList,
  pokemonApiUrl,
} from "./utils/getPokemonPageList/getPokémonPageList.js";

const pageContainer: HTMLElement = document.querySelector(".root");

const header = new HeaderComponent(pageContainer, "img/header-img.png");
