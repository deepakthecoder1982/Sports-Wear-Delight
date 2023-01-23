let input = JSON.parse(localStorage.getItem('Item_Details')) || {};
console.log(input);

let im = document.createElement('img');
im.src = input.image;
im.style.width = "100%"

document.getElementById('image').append(im);
document.getElementById('title').innerText = input.title;
document.getElementById('brand').innerText = `Brand: ${input.brand}`;
document.getElementById('price').innerText = `${input.price}`;
document.getElementById("color").innerText = `${input.color}`;

let cartData = JSON.parse(localStorage.getItem('cart_data')) || [];

document.getElementById('addToCart').addEventListener('click', add_to_cart);
function add_to_cart() {
    let check = cartData.filter((el) => {
        return el.title == input.title;
    });
    if (check.length < 1) {
        alert('Item successfully added in cart');
        let array = JSON.parse(localStorage.getItem('cart_data')) || [];
        array.push(input);
        localStorage.setItem('cart_data', JSON.stringify(array));
        window.location.reload();
    } else {
        alert('Item already exists in cart');
    }
}
