import createMain from "./main";
import createMenu from "./menu";

let main = document.querySelector("main");
main.appendChild(createMain())
console.log(main.firstElementChild.className);

let nav = document.querySelectorAll("li");

nav.forEach(item => {
    item.addEventListener("click", () => {
        if (item.id == "home" && main.firstElementChild.className != "inicio") {
            main.removeChild(main.firstElementChild);
            main.appendChild(createMain());
        }
        else if (item.id == "menu" && main.firstElementChild.className != "menu") {
            main.removeChild(main.firstElementChild);
            main.appendChild(createMenu());
        }
        else if (item.id == "contact" && main.firstElementChild.className != "menu") {
            main.removeChild((mainfirstElementChild));
            main.appendChild(createContact());
        }
    })
})
