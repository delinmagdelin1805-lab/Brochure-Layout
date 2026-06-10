/* Brochure Interaction */

const button =
    document.querySelector("button");

/* Button Click */

button.addEventListener("click", () => {

    button.innerText =
        "Opening...";

    setTimeout(() => {

        button.innerText =
            "Explore More";

    }, 2000);

});