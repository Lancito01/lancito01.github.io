document.addEventListener("load", function () {
    toggleDarkLightMode()

    let result = Math.floor((Date.now() / 1000 - 1073530800) / 31536000)
    let ageSpan = document.querySelector(".age")
    if (ageSpan) {
        ageSpan.textContent = result.toString()
    } else {
        console.error("Could not find span element with class 'age'")
    }
})