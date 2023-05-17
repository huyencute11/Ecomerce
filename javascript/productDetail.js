import { allProduct } from "./data.js";
// get id product saved in localstorage
const id = localStorage.getItem("id");
const findProduct = (id) => {
  return allProduct.find((e) => e.id == id);
};
let productDetail = findProduct(id);

//render swiper-slide
var swiperSlide = [findProduct(id)];
var i = 0;
while (i < 4) {
  //random 0-9
  let idRandom = Math.floor(Math.random() * 10) + 1;
  if (!swiperSlide.includes(findProduct(idRandom))) {
    console.log(findProduct(idRandom));
    swiperSlide.push(findProduct(idRandom));
    i++;
  }
}
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const renderProductContent = () => {
  let Content = `
  <div class="row">
  <div class="col-lg-6 text-center align-items-center ">
    <div class="product-image">
      <div class="image">
        <img src= ${productDetail.img} alt=${productDetail.name} srcset="">
      </div>
    </div>
  </div>
  <div class="col-lg-6 align-items-center">
    <div class="product-details-content">
      <h1 class="product_name text-center">${productDetail.name}</h1>
      <p class="price text-left">
        <span>Price: </span>
        <span>${formatter.format(productDetail.price)}</span>
      </p>
      <div class="product-title">
        <p>
          ${productDetail.detail}
        </p>
      </div>
      <div class="add-cart">
        
       
       
        <a href="#" class="red_button add_to_cart_button" data-name=${productDetail.id
    } data-price= ${productDetail.price}>
           ADD TO CART
        </a> 
      
      </div>
      <div class="category">
        <span>Category: </span>
        <span>${productDetail.genner}</span>
      </div>
    </div>
  </div>
</div>`;
  var a = document.querySelector(".product-content-buy .container");
  a.innerHTML = Content;
};

renderProductContent();

// $(".add_to_cart_button").click(function(event) {
//     event.preventDefault();
//     var id = $(this).data("name");
//     //   console.log(findProduct(id));
//     cartNumber(findProduct(id));
//     totalCost(findProduct(id));
// });

let products = [];

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".checkout_items").textContent = productNumbers;
  }
}

function cartNumber(product) {
  console.log("san pham da chon", product);
  let productNumbers = localStorage.getItem("cartNumbers");
  //parseInt
  productNumbers = parseInt(productNumbers);
  //if not NaN
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    let checkout = document.querySelector(".checkout_items");
    checkout.textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    let checkout = document.querySelector(".checkout_items");
    console.log(checkout);
    checkout.textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = []
  if (localStorage.getItem("productsIncart")) {
    cartItems = cartItems.concat(JSON.parse(localStorage.getItem("productsIncart")));
  }
  var check = false;
  console.log(cartItems);
  cartItems.find(function (item) {
    console.log(item.id, product.id);
    if (item.id == product.id) {
      check = true;
      console.log(check);
      item.incart++;
    }
  });
  // if (!check) {
  //     cartItems.push({
  //         ...product,
  //         incart: 1
  //     })
  // }

  localStorage.setItem("productsIncart", JSON.stringify(cartItems));

}

function totalCost(product) {
  // console.log("the product price is", product.price);
  let cartCost = localStorage.getItem("totalCost");
  //console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsIncart");
  cartItems = JSON.parse(cartItems);
  let cartContainer = $(".cart-container tbody");
  console.log(cartContainer);
}

onLoadCartNumbers();