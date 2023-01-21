fetch("./data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {

        // console.log(data);
        document.getElementById("totalProducts").innerText = data.length;
        renderCards(data)
    })
    .catch((err) => {
        console.log(err);
    })


function renderCards(data) {
    let mainSection = document.getElementById("productBox_body");

    let kidsCategoryData = [];

    let sortByPrice = document.getElementById("sortByPrice");

    let cards = data.map(item => getCard(item.name, item.image, item.brand, item.discount_price, item.original_price)).join("");

    mainSection.innerHTML = cards;
    sortByPrice.addEventListener("change", function (e) {
        if (sortByPrice.value == "highToLow") {
            data.sort((a, b) => (a.discount_price < b.discount_price ? 1 : -1));
        } else if (sortByPrice.value == "lowToHigh") {
            data.sort((a, b) => (a.discount_price > b.discount_price ? 1 : -1));
        }
        mainSection.innerHTML = JSON.stringify(data)
    });
}

function getCard(name, image, brand, discount_price, original_price) {
    let card = `
        <div class="card">
            <div class="cardImage">
                <img src=${image} alt="error">
            </div>
            
            <div class="cardDetails">
                <a href="#">${brand}</a><br>
                <a href="#">${name}</a><br>
                <span> $ ${discount_price}</span>
                &nbsp&nbsp
                <span><s>$ ${original_price}</s></span>
            </div>
        </div>
        `

    return card;
}



