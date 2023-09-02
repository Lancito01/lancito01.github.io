const elements = document.getElementsByClassName('hack-effect'),
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'"

const elementsArray = Array.from(elements);
elementsArray.forEach(function (element) {
    element.onmouseover = function (event) {
        let iterations = 0;

        const interval = setInterval(function () {
            event.target.innerText = event.target.innerText.split("").map(function (letter, index) {
                if (index < iterations) return event.target.dataset.value[index];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");

            if (iterations >= event.target.dataset.value.length) clearInterval(interval);
            iterations++;
        }, 35)
    }
})