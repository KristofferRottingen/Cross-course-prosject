


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("i");
const heading = params.get("h");
const image = document.querySelector(".jacket-img");
const background = document.querySelector("#background-jackets-product");
const containerColor = document.querySelector("#text-container-product");
const productHeading = document.querySelector(".left-text h1");

console.log(id);
console.log(image);

if (id === "hiking-men") {
    image.innerHTML = `<img src="../images/HIKING HERRE test.png"
    alt="Jacket man Hiking" />`;
    background.classList.add("background-jackets");
    containerColor.classList.add("text-container");
    productHeading.innerHTML = `${heading}`;
} else if (id === "hiking-women") {
    image.innerHTML = `<img src="images/HIKING.png" alt="Hiking Dame jakke"
    />`;
    background.classList.add("background-jackets");
    containerColor.classList.add("text-container-hiking-women");
    productHeading.innerHTML = `${heading}`;
} 

