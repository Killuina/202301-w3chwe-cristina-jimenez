import type PokemonInfoStructure from "../../utils/getPokemonInfo/PokemonInfoStructure.js";
import Component from "../Component/Component.js";
class CardComponent extends Component {
  pokemonInfo: PokemonInfoStructure;

  constructor(parentElement: Element, pokemonInfo: PokemonInfoStructure) {
    super(parentElement, "pokemon-card", "article");
    this.pokemonInfo = pokemonInfo;
    this.render();
  }

  render() {
    super.render();
    this.element.innerHTML = `
    <span>${this.pokemonInfo.name}</span>
    <img src=${this.pokemonInfo.sprites.versions["generation-v"]["black-white"].animated.front_default}>`;
  }
}

export default CardComponent;
