const detailsPage = document.querySelector(".detailsPage");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const heading = params.get("h");

const proxy = "https://noroffcors.herokuapp.com/";

const products = "https://cms-ca.kristoffer-flower.store/wp-json/wc/store/products/" + id;

const cors = proxy + products;

async function fetchProducts() {
    try {
        const resp = await fetch(cors);

        const info = await resp.json();

        console.log(info);

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

if (id === "10") {
    image.innerHTML = `<img src="../images/HIKING HERRE test.png"
    alt="Jacket man Hiking" />`;
    background.classList.add("background-jackets");
    containerColor.classList.add("text-container");
    productHeading.innerHTML = `${heading}`;
} else if (id === "12") {
    image.innerHTML = `<img src="images/HIKING.png" alt="Hiking Dame jakke"
    />`;
    background.classList.add("background-jackets");
    containerColor.classList.add("text-container-hiking-women");
    productHeading.innerHTML = `${heading}`;
} else if (id === "20") {
    image.innerHTML = `<img src="images/SKIING.png" alt="skiing herre jakke"/>`;
    background.classList.add("background-jackets-skiing");
    containerColor.classList.add("text-container-skiing");
    productHeading.innerHTML = `${heading}`;
} else if (id === "21") {
    image.innerHTML = `<img src="../images/SKIING DAME.png" alt="Jacket women Skiníng" />`;
    background.classList.add("background-jackets-skiing");
    containerColor.classList.add("text-container-skiing-women");
    productHeading.innerHTML = `${heading}`;
} else if (id === "22") {
    image.innerHTML = `<img src="images/CAMPING.png" alt="Camping herre jakke"/>`;
    background.classList.add("background-jackets-camping");
    containerColor.classList.add("text-container-camping");
    productHeading.innerHTML = `${heading}`;
} else if (id === "23") {
    image.innerHTML = `<img src="images/CAMPING DAME.png" alt="Camping Dame jakke"
    />`;
    background.classList.add("background-jackets-camping");
    containerColor.classList.add("text-container-camping-women");
    productHeading.innerHTML = `${heading}`;
} else if (id === "24") {
    image.innerHTML = `<img src="images/Canoeing.png" alt="Canoeing herre jakke"/>`;
    background.classList.add("background-jackets-canoeing");
    containerColor.classList.add("text-container-canoeing");
    productHeading.innerHTML = `${heading}`;
} else if (id === "25") {
    image.innerHTML = `<img src="images/CANOEING DAME.png" alt="Canoeing Dame jakke"
    />`;
    background.classList.add("background-jackets-canoeing");
    containerColor.classList.add("text-container-canoeing-women");
    productHeading.innerHTML = `${heading}`;
} 
