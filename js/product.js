


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("i");
const image = document.querySelector(".jacket-img");

console.log(id);
console.log(image);

if (id === "hiking-men") {
    image.style.backgroundImage = "url(../../images/CAMPING.png)";
}