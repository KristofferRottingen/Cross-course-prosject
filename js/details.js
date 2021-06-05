const detailsPage = document.querySelector(".detailsPage");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const heading = params.get("h");
const title = document.querySelector("title");

const proxy = "https://noroffcors.herokuapp.com/";

const products = "https://cms-ca.kristoffer-flower.store/wp-json/wc/store/products/" + id;

const cors = proxy + products;

async function fetchProducts() {
    try {
        const resp = await fetch(cors);

        const info = await resp.json();

        console.log(info);

        title.innerHTML = `${info.name} | RainyDays`;

        image.innerHTML = `<img src="${info.images[0].src}" alt="${info.name} Jacket" />`;
        productHeading.innerHTML = `${info.name}`;

        if (id === "10") {
            background.classList.add("background-jackets");
            containerColor.classList.add("text-container");
        } else if (id === "12") {
            background.classList.add("background-jackets");
            containerColor.classList.add("text-container-hiking-women");
        } else if (id === "20") {
            background.classList.add("background-jackets-skiing");
            containerColor.classList.add("text-container-skiing");
        } else if (id === "21") {
            background.classList.add("background-jackets-skiing");
            containerColor.classList.add("text-container-skiing-women");
        } else if (id === "22") {
            background.classList.add("background-jackets-camping");
            containerColor.classList.add("text-container-camping");
        } else if (id === "23") {
            background.classList.add("background-jackets-camping");
            containerColor.classList.add("text-container-camping-women");
        } else if (id === "24") {
            background.classList.add("background-jackets-canoeing");
            containerColor.classList.add("text-container-canoeing");
        } else if (id === "25") {
            background.classList.add("background-jackets-canoeing");
            containerColor.classList.add("text-container-canoeing-women");
        } 


    } catch (error) {
        detailsPage.innerHTML = errorMessage();
    }
}

fetchProducts();


const image = document.querySelector(".jacket-img");
const background = document.querySelector("#background-jackets-product");
const containerColor = document.querySelector("#text-container-product");
const productHeading = document.querySelector(".left-text h1");
/* Id to the product page */




