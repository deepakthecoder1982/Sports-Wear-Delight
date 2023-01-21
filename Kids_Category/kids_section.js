fetch("./data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("totalProducts").innerText = data.length;
        window.addEventListener("load", () => {
            renderCards(data);
        })
    })
    .catch((err) => {
        console.log(err);
    })


function renderCards(data) {
    let mainSection = document.getElementById("productBox_body");
    mainSection.innerHTML = null;

    let sortByPrice = document.getElementById("sortByPrice");

    let cards = data.map(item => getCard(item.name, item.image, item.brand, item.discount_price, item.original_price)).join("");
    mainSection.innerHTML = cards;

    sortByPrice.addEventListener("change", function (e) {
        console.log(sortByPrice.value);

        if (sortByPrice.value == "highToLow") {
            data.sort((a, b) => b.discount_price - a.discount_price);
        } else if (sortByPrice.value == "lowToHigh") {
            data.sort((a, b) => a.discount_price - b.discount_price);
        }
        renderCards(data)
        
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





































// let data = JSON.parse(localStorage.getItem("NewProducts"));

// append(data);

// function append(data) {
//     let parent = document.querySelector("#item");
//     console.log(data);
//     parent.innerHTML = "";

//     data.forEach((el) => {
//         let div = document.createElement("div");
//         div.addEventListener("click", function () {
//             detail(el);
//         });

//         let img = document.createElement("img");
//         img.src = el.imgURL;
//         img.addEventListener("mouseover", function (e) {
//             img.src = el.img2;
//         });

//         let name = document.createElement("p");
//         name.innerText = el.name;

//         let price = document.createElement("h3");
//         price.innerText = el.price;

//         let discount = document.createElement("h6");
//         if (el.off == undefined) {
//             discount.innerText = "";
//         } else {
//             let text = el.cutprice + " " + el.off;
//             discount.innerText = text;
//         }

//         let div2 = document.createElement("div");
//         div2.setAttribute("class", "logo");

//         let img2 = document.createElement("img");
//         img2.setAttribute("id", "logoimg");
//         img2.src =
//             "https://as2.ftcdn.net/v2/jpg/01/25/83/03/1000_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg";

//         let wish = document.createElement("p");
//         wish.innerText = el.whislist;

//         div2.append(img2, wish);

//         div.append(img, name, price, discount, div2);

//         parent.append(div);
//     });
// }

// let sort = document.querySelector("#sortByPrice");

// sort.addEventListener("change", function (e) {
//     if (sort.value == "highToLow") {
//         NewProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
//     } else if (sort.value == "lowToHigh") {
//         NewProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
//     }
//     append(NewProducts);
//     // alert("hello")
// });

// let totalProducts = document.querySelector("#totalPrd");
// totalProducts.innerText = NewProducts.length;

//*********************************************************************** */

// function showData(data){

//     data.forEach((element,index)=>{
//         let card = document.createElement("div");
//         card.classList.add("card");

//         let cardImage = document.createElement("div");
//         cardImage.classList.add("cardImage");

//         let image = document.createElement("img");
//         image.setAttribute("src",element.image);

//         let cardDetails = document.createElement("div");
//         cardDetails.classList.add("cardDetails");

//         let aBrand = document.createElement("a");
//         abrand.setAttribute("href",element.brand);

//         let aName = document.createElement("a");
//         aName.setAttribute("href",element.name);

//         let discountPrice = document.createElement("span");
//         discountPrice.textContent = element.discount_price;

//         let originalPrice = document.createElement("s");
//         originalPrice.textContent = element.original_price;

//         let coverOriginalPrice = document.createElement("span");


//         cardImage.append(image);
//         coverOriginalPrice.append(originalPrice)
//         cardDetails.append(aBrand,aName,discountPrice,coverOriginalPrice);
//         card.append(cardImage,cardDetails);
//         mainSection.append(card);

//     })

// }

// showData()