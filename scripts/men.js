
let data = JSON.parse(localStorage.getItem("NewProducts"))

append(data)

function append(data) {
    let parent = document.querySelector("#item");
    console.log(data)
    parent.innerHTML = "";

    data.forEach((el) => {

        let div = document.createElement('div');
        div.addEventListener("click", function () {
            detail(el);
        })

        let img = document.createElement('img');
        img.src = el.imgURL;

        let name = document.createElement('p');
        name.innerText = el.name;

        let price = document.createElement('h3');
        price.innerText = el.price;

        let discount = document.createElement('h6');
        if (el.off == undefined) {
            discount.innerText = "";
        } else {
            let text = el.cutprice + " " + el.off;
            discount.innerText = text;
        }

        let div2 = document.createElement("div");
        div2.setAttribute("class", "logo")

        let img2 = document.createElement('img');
        img2.setAttribute("id", "logoimg")
        img2.src = "https://as2.ftcdn.net/v2/jpg/01/25/83/03/1000_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"

        let wish = document.createElement('p');
        wish.innerText = el.whislist;

        div2.append(img2, wish)

        div.append(img, name, price, discount, div2);

        parent.append(div)

   })


}

