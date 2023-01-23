const genderFilter = document.getElementById("gender");
const productBox = document.querySelector("#productBox_body");

let womenArray = JSON.parse(localStorage.getItem("womenProducts"));
console.log(womenArray);

displayData(womenArray);

genderFilter.addEventListener("change", function (event) {
  const selectedGenders = [];

  // get all selected checkboxes
  const checkboxes = genderFilter.querySelectorAll("input[type='checkbox']");
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      selectedGenders.push(checkbox.id);
    }
  }

  // filter items based on selected genders
  let filteredData = womenArray.filter((item) => {
    return selectedGenders.includes(item.gender);
  });

  displayData(filteredData);
});

let sortFilter = document.querySelector("#sortByPrice");
sortFilter.addEventListener("change", function (event) {
  const selectedSort = event.target.value;
  let sortedData = womenArray;
  if (selectedSort === "highToLow") {
    sortedData = womenArray.sort((a, b) => b.discount_price - a.discount_price);
  } else if (selectedSort === "lowToHigh") {
    sortedData = womenArray.sort((a, b) => a.discount_price - b.discount_price);
  }

  displayData(sortedData);
});

// Get the select elements
const genderSelect = document.getElementById("gender");
const colorSelect = document.getElementById("color");
const sizeSelect = document.getElementById("size");
const brandSelect = document.getElementById("brand");

// Add an event listener to each select element
genderSelect.addEventListener("change", filter);
colorSelect.addEventListener("change", filter);
sizeSelect.addEventListener("change", filter);
brandSelect.addEventListener("change", filter);

function filter() {
  // Get the selected values from the select elements
  const selectedGender = genderSelect.value;
  const selectedColor = colorSelect.value;
  const selectedSize = sizeSelect.value;
  const selectedBrand = brandSelect.value;

  // Filter the womenData array
  let filteredData = filterBy(
    selectedGender,
    selectedColor,
    selectedSize,
    selectedBrand
  );
  console.log(filteredData);
  displayData(filteredData);
}

function filterBy(gender, color, size, brand) {
  return womenData.filter((item) => {
    return (
      (item.gender === gender || !gender) &&
      (item.color === color || !color) &&
      (item.size === size || !size) &&
      (item.brand === brand || !brand)
    );
  });
}

let totalProducts = document.querySelector("#totalProducts");
totalProducts.innerText = "2050";

function displayData(data) {
  productBox.innerHTML = "";

  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el.image;

    let brand = document.createElement("h3");
    brand.innerText = el.brand;

    let name = document.createElement("h4");
    name.innerText = el.name;

    let discountPrice = document.createElement("span");
    discountPrice.innerText = "Rs." + el.discount_price;
    discountPrice.style.color = "black";

    let price = document.createElement("s");
    price.innerText = "Rs." + el.original_price;
    price.style.color = "gray";
    price.style.marginLeft = "20px";

    let span = document.createElement("span");
    span.innerText = "  25% off";

    let div = document.createElement("div");
    div.append(img, brand, name, discountPrice, price, span);
    div.addEventListener("click", () => {
      let obj = {
        title: el.name,
        price: el.discount_price,
        image: el.image,
        quantity: 1,
        brand: el.brand,
        color:el.color
      };
      console.log(obj);
      localStorage.setItem("Item_Details", JSON.stringify(obj));
      window.location.href ='./individualProduct.html'
    });

    productBox.append(div);
  });
}

// Pagination
let itemsPerPage = 10;
let currentPage = 1;
const paginationLinks = document.querySelectorAll(".pagination a");
paginationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    currentPage = parseInt(event.target.textContent);
    updatePagination();
    displayData(getCurrentPageData());
  });
});

function updatePagination() {
  paginationLinks.forEach((link) => {
    link.classList.remove("active");
  });
  document
    .querySelector(`.pagination a:nth-child(${currentPage})`)
    .classList.add("active");
}

function getCurrentPageData() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return womenArray.slice(startIndex, endIndex);
}

