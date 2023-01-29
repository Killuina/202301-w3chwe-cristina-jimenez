import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  headerImg: string;
  constructor(parentElement: Element, imgUrl: string) {
    super(parentElement, "main-header", "header");
    this.headerImg = imgUrl;
    this.render();
  }

  render(): void {
    super.render();
    this.element.innerHTML = `<img src=${this.headerImg} alt="Pokédex logo">`;
  }
}

export default HeaderComponent;
