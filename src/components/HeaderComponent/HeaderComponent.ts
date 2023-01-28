import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  headerImg: string;
  constructor(parentElement: HTMLElement, imgUrl: string) {
    super(parentElement, "main-header", "header");
    this.headerImg = imgUrl;
    this.render();
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<img src="${this.headerImg}">`;
  }
}

export default HeaderComponent;
