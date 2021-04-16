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

            jacketListMen.innerHTML += `<div>
            <a href="product.html?i=hiking-men&h=HIKING"><img src="images/HIKING HERRE test.png" alt="Hiking herre jakke"/></a>
            <h3>HIKING</h3>
            <h3>kr 1500,-</h3>
          </div>`;

        }
    } catch (error) {
        container.innerHTML = errorMessage();
    }
};
