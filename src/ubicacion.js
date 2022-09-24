import "./ubicacion.css";

import mapa from "./ubicacion.jpg";

export default function createLocation() {
    let container = document.createElement("div");
    container.classList.add("location");

    let descriptionContainer = descriptionDiv("Los mejores tacos de tu esquina");
    container.appendChild(descriptionContainer);

    let locationImage = mapDiv(mapa);
    container.appendChild(locationImage);

    return container;
}

function descriptionDiv(header) {
    let descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("location-description");

    let h2 = document.createElement("h2");
    h2.textContent = header;

    descriptionContainer.appendChild(h2);

    return descriptionContainer;
}

function mapDiv(source) {

    let mapContainer = document.createElement("div");
    mapContainer.classList.add("map");

    let mapImage = new Image();
    mapImage.src = mapa;

    mapContainer.appendChild(mapImage);

    return mapContainer;
}
