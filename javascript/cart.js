import { allProduct } from "./data.js";

const findProduct = (id) => {
  return allProduct.find((e) => e.id == id);
};
// let productDetail = findProduct(id);

function onLoadCartNumbers() {
  var cartItems = JSON.parse(localStorage.getItem("productsIncart"));

  let totalQuantity = 0;
  cartItems.forEach(function (item) {
    totalQuantity += item.incart;
  });
  if (totalQuantity > 0) {
    let checkout = document.querySelector(".checkout_items");
    checkout.textContent = totalQuantity;
  } else {
    let checkout = document.querySelector(".checkout_items");
    console.log(checkout);
    checkout.textContent = 0;
  }
}
$(".add_to_cart_button").click(function (e) {
  e.preventDefault();
  var id = $(this).data("name");
  //   console.log(findProduct(id));
  cartNumber(findProduct(id));
  let productContainer = $(".product-body");
  let totalContainer = $(".total");
  // productContainer.append("1");
});

function cartNumber(product) {
  // tạo ra một mảng sản rỗng để chứa các sp add vào cart
  let cartItems = [];
  if (localStorage.getItem("productsIncart")) {
    cartItems = cartItems.concat(
      JSON.parse(localStorage.getItem("productsIncart"))
    );
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
  if (!check) {
    // spread ...
    cartItems.push({
      ...product,
      incart: 1,
    });
  }
  localStorage.setItem("productsIncart", JSON.stringify(cartItems));
  let totalQuantity = 0;
  cartItems.forEach(function (item) {
    totalQuantity += item.incart;
  });
  onLoadCartNumbers();
}

function totalPrice() {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  var alltotal = 0;
  var allQty = 0;
  $("#tbody tr").each(function () {
    let price = Number(
      $(this)
        .find(".price")
        .text()
        .replace(/[^0-9.-]+/g, "")
    );
    let quantity = Number($(this).find("input").val());
    console.log(quantity);
    let total = price * quantity;
    let id = $(this).find(".cart-delete").data("name");
    allQty += quantity;
    alltotal += total;
    $(this).find(".total").text(formatter.format(total));
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    cartItems.find(function (item) {
      if (item.id == id) {
        item.incart = quantity;
      }
    });
    localStorage.setItem("productsIncart", JSON.stringify(cartItems));
  });
  $("#allTotal").text(formatter.format(alltotal));
  $("#allTotalShip").text(formatter.format(alltotal + 30));
  // localStorage.setItem('cartNumbers', allQty);
  // localStorage.setItem('totalCost', alltotal);
  onLoadCartNumbers();
  // displayCart();
}

function displayCart() {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let cartItems = localStorage.getItem("productsIncart");
  let cartCost = parseInt(localStorage.getItem("totalCost"));
  cartItems = JSON.parse(cartItems);
  let productContainer = $(".product-body");
  console.log(productContainer);

  let output = "";
  let out2 = "";
  if (cartItems && productContainer) {
    let dem = 0;
    for (let i in cartItems) {
      output += `
            <tr>
            <td>
                <a class='cart-delete' data-name= ${cartItems[i].id} href="#">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </td>
            <td>
                <img src=${cartItems[i].img} alt="">

            </td>
            <td>
                <h5 class="name-pro">${cartItems[i].name}</h5>
            </td>
            <td>
                <h5 class="price">${formatter.format(cartItems[i].price)}
                </h5>
            </td>
            <td>
                <div class="qty_input_wrapper">
                    <i class="fa-solid fa-minus"></i>
                    <input class="w-25 pl-1" class="qtyInput " value="${
                      cartItems[i].incart
                    }" step="1" min="1" type="number" size="30">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </td>
            <td>
                <h5 class="total">${formatter.format(
                  cartItems[i].price * cartItems[i].incart
                )}</h5>
            </td>
        </tr>
      `;
    }
    productContainer.html(output);
    totalPrice();
  }
}
// xu ly them bot product
$(document).ready(function () {
  $(".fa-minus").click(function () {
    var qty = $(this).next().val();
    console.log($(this).next().val());
    if (qty > 1) {
      qty--;
    } else alert("Minimum quantity is 1");
    $(this).next().val(qty);
    totalPrice();
  });
  $(".fa-plus").click(function () {
    var qty = $(this).prev().val();
    if (qty < 30) {
      qty++;
    } else alert("Maximum quantity is 30");
    $(this).prev().val(qty);
    totalPrice();
  });
  $(".cart-delete").click(function () {
    let id = $(this).data("name");
    console.log(id);
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    cartItems.forEach((e, i) => {
      if (e.id == id) {
        cartItems.splice(i, 1);
      }
    });
    localStorage.setItem("productsIncart", JSON.stringify(cartItems));
    totalPrice();
    location.reload();
  });
});
onLoadCartNumbers();
displayCart();
