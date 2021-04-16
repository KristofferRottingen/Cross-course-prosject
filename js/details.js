const detailsPage = document.querySelector(".details-page")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const image = document.querySelector(".jacket-img");
const background = document.querySelector("#background-jackets-product");
const containerColor = document.querySelector("#text-container-product");
const productHeading = document.querySelector(".left-text");

const url = "https://kristofferrottingen.netlify.app/product.html?id=" + id;

async function getProductDetails() {
    try{
        const response = await fetch(url);
        
        const data = await response.json();

        console.log(data);

        html(data);

    } catch (error) {

    }
}

getProductDetails();