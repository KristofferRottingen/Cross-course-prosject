const jacketListWomen = document.querySelector(".jacket-list-women");

async function getProductInfoWomen() {
    
    try{
        const res = await fetch(url);

        const data = await res.json();

        console.log(data);

        jacketListWomen.innerHTML= "";

        for(let i = 0; i < data.length; i++){
            console.log(data[i].id)

            if(i === 6 || i === 4 || i === 2 || i === 1){
                
                jacketListWomen.innerHTML += `<div>
                <a href="product.html?id=${data[i].id}"><img src="${data[i].images[0].src}"/></a>
                <h3>${data[i].name}</h3>
                <h3>${data[i].prices.price}${data[i].prices.currency_symbol}</h3>
                </div>`;
            };
        }
    } catch (error) {
        container.innerHTML = errorMessage();
    }
};

getProductInfoWomen();