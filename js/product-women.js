const jacketListWomen = document.querySelector(".jacket-list-women");

const urlWomen = "https://cms-ca.kristoffer-flower.store/wp-json/wc/store/products?category=19";

async function getProductInfoWomen() {
    
    try{
        const response = await fetch(urlWomen);

        const products = await response.json();

        console.log(products);

        jacketListWomen.innerHTML= "";

        for(let i = 0; i < products.length; i++){
            console.log(products[i].id)

            if(i === 4){
                break;
            };

            jacketListWomen.innerHTML += `<div>
                <a href="product.html?id=${products[i].id}"><img src="${products[i].images[0].src}"/></a>
                <h3>${products[i].name}</h3>
                <h3>${products[i].prices.price}${products[i].prices.currency_symbol}</h3>
            </div>`;
        }
    } catch (error) {
        container.innerHTML = errorMessage();
    }
};

getProductInfoWomen();