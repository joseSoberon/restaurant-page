import "./menu.css";
import alambre from "./tacos-alambre.jpg";
import bistec from "./tacos-bistec.jpg";
import gringa from "./tacos-gringa.jpg";
import pastor from "./tacos-pastor.jpg";
import suadero from "./tacos-suadero.jpg";
import volcan from "./tacos-volcan.jpg";

export default function createMenu() {
    let container = document.createElement("div");
    container.classList.add("menu");

    let lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat, at reprehenderit ex repellendus soluta quae nobis quia facilis laboriosam dignissimos quas sit ratione asperiores, aliquid aut vitae assumenda iste?";

    let tacosPastor = createDescriptionDiv("Tacos de Pastor", lorem);
    let imagePastor = createImageDiv(pastor);
    let pastorContainer = createItemDiv(tacosPastor, imagePastor);

    let tacosBistec = createDescriptionDiv("Tacos de Bistec", lorem);
    let imageBistec = createImageDiv(bistec);
    let bistecContainer = createItemDiv(tacosBistec, imageBistec);

    let tacosSuadero = createDescriptionDiv("Tacos de Suadero", lorem);
    let imageSuadero = createImageDiv(suadero);
    let suaderoContainer = createItemDiv(tacosSuadero, imageSuadero);

    let tacosGringa = createDescriptionDiv("Volcanes", lorem);
    let imagenGringa = createImageDiv(gringa);
    let gringaContainer = createItemDiv(tacosGringa, imagenGringa);

    let tacosAlambre = createDescriptionDiv("Alambre", lorem);
    let imagenAlambre = createImageDiv(alambre);
    let alambreContainer = createItemDiv(tacosAlambre, imagenAlambre);

    let tacosVolcan = createDescriptionDiv("Volcan", lorem);
    let imagenVolcan = createImageDiv(volcan);
    let volcanContainer = createItemDiv(tacosVolcan, imagenVolcan);


    container.appendChild(pastorContainer);
    container.appendChild(bistecContainer);
    container.appendChild(suaderoContainer);
    container.appendChild(gringaContainer);
    container.appendChild(alambreContainer);
    container.appendChild(volcanContainer);

    return container;
}


function createItemDiv(description, image) {
    let menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-item");

    menuDiv.appendChild(description);
    menuDiv.appendChild(image);

    return menuDiv
}

function createDescriptionDiv(name, description) {
    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("item-description");

    let h2 = document.createElement("h2");
    h2.textContent = name;

    let p = document.createElement("p");
    p.textContent = description;

    descriptionDiv.appendChild(h2);
    descriptionDiv.appendChild(p);

    return descriptionDiv;
}

function createImageDiv(imageSource) {
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("item-image");

    let image = new Image();
    image.src = imageSource;

    imageDiv.appendChild(image);

    return imageDiv;
}
