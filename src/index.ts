import CardComponent from "./components/CardComponent/CardComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { getPokemonInfo } from "./utils/getPokemonInfo/getPokemonInfo.js";
import { getPokemonPageList } from "./utils/getPokemonPageList/getPokémonPageList.js";
import { getPokemonUrl } from "./utils/getPokemonUrl/getPokemonUrl.js";

const pageList = await getPokemonPageList("https://pokeapi.co/api/v2/pokemon");
const pokemonUrl = await getPokemonUrl("https://pokeapi.co/api/v2/pokemon", 4);
const pokemonInfo = await getPokemonInfo(pokemonUrl);

const pageContainer: HTMLElement = document.querySelector(".root");

const header = new HeaderComponent(pageContainer, "img/header-img.png");

const card = new CardComponent(pageContainer, pokemonInfo);
