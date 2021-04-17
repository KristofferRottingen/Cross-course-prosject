const detailsPage = document.querySelector(".details-page")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const proxy = "https://noroffcors.herokuapp.com/";

const url = "https://kristofferrottingen.netlify.app/product.html?id=" + id;

const jobsInfoPage = proxy + url;

async function getProductDetails() {
    try{
        const response = await fetch(jobsInfoPage);
        
        const data = await response.json();

        console.log(data);

        html(data);

    } catch (error){

    }
}

getProductDetails();

function html(data) {
    detailsPage.innerHTML = `<div class="details-page">
                                <div class="content">
                                    <h1>${data.company}</h1>
                                    <img class="details-cplogo" src="${data.company_logo}" alt="company logo">
                                    <div class="descirption">
                                        <h2>${data.title}</h2>
                                        <p>${data.description}</p>
                                        <h2>how to apply</h2>
                                        <p>${data.how_to_apply}</p>
                                    </div>
                                </div>    
                            </div>`
};