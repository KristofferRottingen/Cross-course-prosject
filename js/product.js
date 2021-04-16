const jacketListMen = document.querySelector(".jacket-list-men");

const url = "https://cms-ca.kristoffer-flower.store/wp-json/wc/store/products";

async function getProductInfo() {
    
    try{
        const res = await fetch(url);

        const data = await res.json();

        console.log(data);

        jacketListMen.innerHTML= "";

        for(let i = 0; i < data.length; i++){
            console.log(data[i].name)

            if (i === 4){
				break;
			}

            jacketListMen.innerHTML += `<div>
            <a href="product.html?id=${data[i].id}"><img src="${data[i].images[0].src}"/></a>
            <h3>${data[i].name}</h3>
            <h3>${data[i].prices.price}</h3>
          </div>`;

        }
    } catch (error) {
        container.innerHTML = errorMessage();
    }
};

getProductInfo();
