let ModeStatus = "dark"
let HtmlElement = document.documentElement
let AccentColorDark = "cyan", AccentColorLight = "red"

// age calculator 1073530800
document.addEventListener("DOMContentLoaded", function () {
    let result = Math.floor((Date.now() / 1000 - 1073530800) / 31536000)
    let ageSpan = document.querySelector(".age")
    if (ageSpan) {
        ageSpan.textContent = result.toString()
    } else {
        console.error("Could not find span element with class 'age'")
    }
})

function toggleDarkLightMode(status) {
    switch (status) {
        case "dark":
            HtmlElement.classList.remove("light-mode")
            HtmlElement.classList.add("dark-mode")
            break
        case "light":
            HtmlElement.classList.remove("dark-mode")
            HtmlElement.classList.add("light-mode")
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
            toggleDarkLightMode(ModeStatus)

            for (let index = 0; index < accentColorElements.length; index++) {
                accentColorElements[index].style.color = "cyan"
            }

            nav.style.backgroundColor = "#141414"
            nav.style.color = "white"
            nav.style.borderBottom = "1px solid " + AccentColorDark

            button.style.backgroundColor = "#1461ff"
            button.style.color = "white"
            break
        case "light":
            toggleDarkLightMode(ModeStatus)

            for (let index = 0; index < accentColorElements.length; index++) {
                accentColorElements[index].style.color = "red"
            }

            nav.style.backgroundColor = "white"
            nav.style.color = "black"
            nav.style.borderBottom = "1px solid " + AccentColorLight

            button.style.backgroundColor = "#ffa34b"
            button.style.color = "black"
            break
        default:
            break
    }
}
