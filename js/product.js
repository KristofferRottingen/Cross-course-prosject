


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("i");
const image = document.querySelector(".jacket-img");
const containerColor = document.querySelector("#background-jackets-product");

console.log(id);
console.log(image);

if (id === "hiking-men") {
    image.innerHTML = `<img src="../images/CAMPING DAME.png" alt="Jacket women Camping" />`;
    containerColor.classList.add("background-jackets-camping");
}

