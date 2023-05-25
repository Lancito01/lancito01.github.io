let ModeStatus = "dark", HtmlElement = document.documentElement, AccentColorDark = "cyan", AccentColorLight = "red"

function backToProjects(){
    window.location.href = "../projects.html"
}

function toggleDarkLightMode() {
    
    spanGradientObj = document.querySelector(".gradient-span")
    switch (ModeStatus) {
        case "dark":
            HtmlElement.classList.remove("light-mode")
            HtmlElement.classList.add("dark-mode")

            document.querySelector(".mode-toggle-button").textContent = "Toggle Dark Mode"

            spanGradientObj.classList.remove("gradient-light-mode")
            spanGradientObj.classList.add("gradient-dark-mode")

            break
        case "light":
            HtmlElement.classList.remove("dark-mode")
            HtmlElement.classList.add("light-mode")

            document.querySelector(".mode-toggle-button").textContent = "Toggle Light Mode"

            spanGradientObj.classList.remove("gradient-dark-mode")
            spanGradientObj.classList.add("gradient-light-mode")

            break
        default:
            break
    }
}

function darkModeFunction() {
    switch (ModeStatus) {
        case "dark":
            ModeStatus = "light"
            break
        case "light":
            ModeStatus = "dark"
            break
        default:
            break
    }

    let accentColorElements = document.querySelectorAll(".accent-color")
    let button = document.querySelector(".mode-toggle-button")
    let nav = document.querySelector("nav")

    switch (ModeStatus) {
        case "dark":
            toggleDarkLightMode()

            for (let index = 0; index < accentColorElements.length; index++) {
                accentColorElements[index].style.color = "cyan"
            }

            nav.style.backgroundColor = "#141414"
            nav.style.color = "white"
            nav.style.borderBottom = "1px solid " + AccentColorDark

            button.style.backgroundColor = "#1461ff"
            button.style.color = "white"

            document.querySelector(".back-button").style.color = "white"
            document.querySelector(".back-button").style.backgroundColor = "#1461ff"

            break
        case "light":
            toggleDarkLightMode()

            for (let index = 0; index < accentColorElements.length; index++) {
                accentColorElements[index].style.color = "red"
            }

            nav.style.backgroundColor = "white"
            nav.style.color = "black"
            nav.style.borderBottom = "1px solid " + AccentColorLight

            button.style.backgroundColor = "#ffa34b"
            button.style.color = "black"

            document.querySelector(".back-button").style.color = "black"
            document.querySelector(".back-button").style.backgroundColor = "#ffa34b"

            break
        default:
            break
    }
}

document.addEventListener("DOMContentLoaded", function () {
    toggleDarkLightMode()


})