const clickButton = document.querySelector(".atc");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const type = params.get("i");
const productName = params.get("h");

clickButton.addEventListener("click", function () {
    
    clickButton.innerHTML = `<a class="atc" href="../checkout.html?i=${type}&h=${productName}">ADD TO CART</a>`;
});

const productImage = document.querySelector(".cart-info")
const cartHeading = document.querySelector(".product-name");

if (type === "skiing-men"){
    productImage.innerHTML = `<img src="images/HIKING HERRE test.png" alt="Hiking herre jakke"/>`
    cartHeading.innerHTML = `${productName}`
};