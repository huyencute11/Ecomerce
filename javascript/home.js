import { allProduct } from "./data.js";
console.log(allProduct);

/** ARRIVAL */
const arrival = document.querySelector(".arrivals-sortting");
arrival.addEventListener("click", function (x) {
  if (x.target.classList.contains("btn-arrival")) {
    const Target = x.target.getAttribute("data-title");
    arrival.querySelector(".active").classList.remove("active");
    x.target.classList.add("active");
  }
});

//set favorite
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
//check span sale/new...
const checkSpan = (sale) => {
  if (sale !== undefined) {
    return `
      <div class="product-bubble">
      <span>${sale}</span>
     </div>
     `;
  } else {
    return ``;
  }
};
const checkNew = (news) => {
  if (news !== undefined) {
    return `
      <div class="product-bubble" style = "background-color: rgb(29, 208, 20);">
      <span >${"NEW"}</span>
     </div>
     `;
  } else {
    return ``;
  }
};
const checkIsSale = (isSale) => {
  if (isSale !== undefined) {
    return `
      <div class="product-bubble" style = "background-color: rgb(147 147 140);">
      <span >${"SALE"}</span>
     </div>
     `;
  } else {
    return ``;
  }
};
const rowProduct = document.querySelector(".row-product");
//render all product
//many sort product
const menProducts = [];
allProduct.forEach((element) => {
  if (element.genner == "men") menProducts.push(element);
});
const womenProducts = [];
allProduct.forEach((element) => {
  if (element.genner == "women") womenProducts.push(element);
});
const accessoriesProducts = [];
allProduct.forEach((element) => {
  if (element.accessories) accessoriesProducts.push(element);
});

const renderProduct = (products) => {
  let productItems = products.map(
    (e) =>
      `
      <div class="product-item"  data-aos="fade-down" data-aos-duration="1500" id= ${
        e.id
      } type = ${e.genner}>
      
         <div class="product">
         <a title="${e.name}" href="./pages/productDetail/productDetail.html">
          <div class="product-image">
            <img
              src=${e.img}
              alt=""
              srcset=""
            />
          </div>
         <a/>
        <div class="favorite">
           <div class="aaa" style="width: 16px">
            <i
              class="far fa-heart icon"
              style="font-size: 1.6rem"
            ></i>
  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              />
            </svg>
           </div>
          
          </div>
  
          ${checkSpan(e.sale)}
          ${checkNew(e.new)}
          ${checkIsSale(e.isSale)}
          <div class="product_info">
            <h6 class="product_name">
              <a href="./pages/productDetail/productDetail.html">${e.name}</a>
            </h6>
            <div class="product_price">${formatter.format(e.price)}
          </div>
        </div>
       
      </div>
      <a href="./pages/productDetail/productDetail.html" class="red_button add_to_cart_button" data-name=${
        e.id
      } data-price= ${e.price}>
         add to cart
      </a> 
    </div>
      `
  );

  rowProduct.innerHTML = productItems.join("");
};
renderProduct(allProduct);

const favorite = () => {
  let svgs = document.querySelectorAll("svg");
  console.log(svgs);
  svgs.forEach((svg) => {
    svg.onclick = (e) => {
      svg.classList.toggle("active");
    };
  });
};
favorite();

// timer
function countdown() {
  const timeSpan =
  new Date().getTime() - new Date("May 30,2022 00:00:00").getTime();

  // 1day = 86400000 milisec, 1hour = 3600000 milisec, 1minute = 60000 milisec
  const inputDay = Math.floor(timeSpan / 86400000);
  const inputHour = Math.floor((timeSpan % 86400000) / 3600000);
  const inputMin = Math.floor((timeSpan % 3600000) / 60000);
  const inputSec = Math.floor((timeSpan % 60000) / 1000);

  document.querySelector(".day").innerText = inputDay;
  document.querySelector(".hour").innerText = inputHour;
  document.querySelector(".minute").innerText = inputMin;
  document.querySelector(".second").innerText = inputSec;
}

setInterval(countdown, 1000);

// handle with arrivals sort
const handleArrivalSort = () => {
  let btnAll = document.querySelector(".btn-arrival.all_sort");
  console.log([btnAll]);
  let btnWomen = document.querySelector(".btn-arrival.women_sort");
  console.log([btnWomen]);
  let btnMen = document.querySelector(".btn-arrival.men_sort");
  console.log(btnMen);
  let btnAccessories = document.querySelector(".btn-arrival.accessories_sort");
  console.log(btnAccessories);

  var productList = document.querySelectorAll(".product-item");
  // console.log(ptoItem[0].id);

  btnAll.onclick = () => {
    renderProduct(allProduct);
    console.log([productList]);
  };
  btnWomen.onclick = () => {
    renderProduct(womenProducts);
    localStorage.removeItem("id");
    setTimeout(() => {
      SaveID();
    }, 2000);
  };
  btnMen.onclick = () => {
    renderProduct(menProducts);
    localStorage.removeItem("id");
    setTimeout(() => {
      SaveID();
    }, 2000);
  };
  btnAccessories.onclick = () => {
    renderProduct(accessoriesProducts);
    localStorage.removeItem("id");
    setTimeout(() => {
      SaveID();
    }, 2000);
  };
};
handleArrivalSort();

//click on product item will be show page product detail, save id product in localStorage
const SaveID = () => {
  const listProducts = $(".product-item");
  for (const item of listProducts) {
    item.onclick = (e) => {
      localStorage.setItem("id", item.id);
    };
  }
};
SaveID();

//import
// import { shoppingCart, cart } from "./cart.js";

// $(".add_to_cart_button").click(function (event) {
//   event.preventDefault();
//   var name = $(this).data("name");
//   var price = Number($(this).data("price"));
//   console.log(name, price);
//   shoppingCart.addItemToCart(name, price, 1);
//   // sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
//   // console.log(shoppingCart.listCart());

//   console.log(JSON.parse(localStorage.getItem("shoppingCart")));
// });
// function displayCart() {
//   var cartArray = shoppingCart.listCart();
//   var output = "";
//add item
// shop
// var listCart = [];
//
// displayCart
// function displayCart() {
//   var cartArray = shoppingCart.listCart();
//   var output = "";
//   for (var i in cartArray) {
//   }
// }
// let addToCartBtns = document.querySelectorAll(".add_to_cart_button");
// console.log(addToCartBtns);
// for (let i = 0; i < addToCartBtns; i++) {
//   addToCartBtns[i].onclick(function (e) {
//     e.preventDefault();

//   });
// }
