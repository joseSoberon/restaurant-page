import createMain from "./main";

let main = document.querySelector("main");
main.appendChild(createMain())
console.log(main.firstElementChild.className);

let nav = document.querySelectorAll("li");

nav.forEach(item => {
    item.addEventListener("click", () => {
        if (item.id == "home" && main.firstElementChild.className != "inicio") {
            console.log("hello");
            main.removeChild(main.firstElementChild);
            main.appendChild(createMain());
        }
        else if (item.id == "menu") {
            main.removeChild(main.firstElementChild);
            console.log(main.value
        }
    })
})
