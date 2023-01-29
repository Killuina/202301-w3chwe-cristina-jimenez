import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";

const pageContainer: HTMLElement = document.querySelector(".root");

const header = new HeaderComponent(pageContainer, "header-img.png");
