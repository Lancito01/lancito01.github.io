let ModeStatus = "dark"
let HtmlElement = document.documentElement;

function toggleDarkLightMode(status) {
    if (status === "dark") {
        HtmlElement.classList.remove("light-mode")
        HtmlElement.classList.add("dark-mode")
    }
    else if (status === "light") {
        HtmlElement.classList.remove("dark-mode");
        HtmlElement.classList.add("light-mode");
    }
}

function darkModeFunction() {
    if (ModeStatus === "dark") {
        ModeStatus = "light"
    }
    else if (ModeStatus === "light") {
        ModeStatus = "dark"
    }

    let arrows = document.querySelectorAll(".arrow-color")
    let button = document.querySelector(".mode-toggle-button")
    let nav = document.querySelector("nav")
    nav.style.transition = "0.5s"

    if (ModeStatus === "dark") { // toggled dark mode
        toggleDarkLightMode(ModeStatus)

        for (let index = 0; index < arrows.length; index++) {
            arrows[index].style.color = "cyan"
        }

        nav.style.backgroundColor = "#141414"
        nav.style.color = "white"
        nav.style.borderBottom = "1px solid white"

        button.style.backgroundColor = "cyan"
        button.style.color = "black"
    }
    else if (ModeStatus === "light") { // toggled light mode
        toggleDarkLightMode(ModeStatus)

        for (let index = 0; index < arrows.length; index++) {
            arrows[index].style.color = "red"
        }

        nav.style.backgroundColor = "white"
        nav.style.color = "black"
        nav.style.borderBottom = "1px solid black"

        button.style.backgroundColor = "red"
        button.style.color = "black"
    }
}
