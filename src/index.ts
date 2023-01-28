import Component from "./components/Component/Component.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";

const pageContainer: HTMLElement = document.querySelector(".root");

const header = new HeaderComponent(pageContainer, "img/header-img.png");
