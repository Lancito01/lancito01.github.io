let ModeStatus = "dark"
let HtmlElement = document.documentElement;

function changeElementsColor(elements, color) {

    for (let index = 0; index < elements.length; index++) {
        elements[index].style.color = color
    }

}

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

    if (ModeStatus === "dark") { // toggled dark mode
        toggleDarkLightMode(ModeStatus)
        changeElementsColor(arrows, "cyan")
        button.style.backgroundColor = "cyan"
        button.style.color = "black"
    }
    else if (ModeStatus === "light") { // toggled light mode

        toggleDarkLightMode(ModeStatus)
        changeElementsColor(arrows, "red")
        button.style.backgroundColor = "red"
        button.style.color = "black"
    }
}
