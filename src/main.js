import "./main.css";
import foodTruck from "./food-image.jpg";

export default function createMain() {
    let container = createDiv("inicio");
    let descriptionDiv = createDiv("description");
    let imageDiv = createDiv("image")

    let title = "Los mejores tacos de tu esquina";
    let heading = createHeading(title);
    descriptionDiv.appendChild(heading);

    let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id, laudantium fugit nobis ad explicabo quo sapiente est aut molestiae iusto ipsam placeat odit. Aliquid quaerat deserunt illum officiis sequi!";
    let paragraph = createParagraph(description);
    descriptionDiv.appendChild(paragraph);

    let image = new Image();
    image.src = foodTruck;
    image.classList.add("image");
    imageDiv.appendChild(image);

    container.appendChild(descriptionDiv);
    container.appendChild(imageDiv);

    return container
}

function createDiv(className) {
    let container = document.createElement("div");
    container.classList.add(className)

    return container;
}

function createHeading(text) {
    let heading = document.createElement("h2");
    heading.textContent = text;

    return heading;
}

function createParagraph(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}
