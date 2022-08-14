let dssp = JSON.parse(localStorage.getItem("Products"));

function napSP(dssp) {
  let i = 0;
  //   let listTag = document.getElementById("product")[0];
  let tag = dssp.map(
    (e) =>
      `
    <div class="col-lg-3 product-item" id= ${e.id} type = ${
        e.genner
      }  data-aos="zoom-in" data-aos-duration="1500">
    
       <div class="product">
       <a title="${e.name}" href="../productDetail/productDetail.html">
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
            <a href="../productDetail/productDetail.html">${e.name}</a>
          </h6>
          <div class="product_price">${formatter.format(e.price)}
        </div>
      </div>
     
    </div>
    <a href="../productDetail/productDetail.html" class="red_button add_to_cart_button" data-name=${
      e.id
    } data-price= ${e.price}>
       ADD TO CART
    </a> 
  </div>
    `
  );

  document.querySelector(".row-product").innerHTML = tag.join("");
}
window.onload = function () {
  napSP(dssp);
};

function listMen() {
  let men = [];
  $("#product").empty();
  dssp.forEach((sp) => {
    if (sp.genner === "men") {
      men.push(sp);
    }
  });
  napSP(men);
}
function listWomen() {
  let men = [];
  $("#product").empty();
  dssp.forEach((sp) => {
    if (sp.genner === "women") {
      men.push(sp);
    }
  });
  napSP(men);
}

function listAccessories() {
  let accessories = [];
  $("#product").empty();
  dssp.forEach((sp) => {
    if (sp.accessories == true) {
      accessories.push(sp);
    }
  });
  napSP(accessories);
}

function listClosthing() {
  let Closthing = [];
  $("#product").empty();
  dssp.forEach((sp) => {
    if (sp.accessories == false) {
      Closthing.push(sp);
    }
  });
  napSP(Closthing);
}
function listFashoin() {
  let fashion = [];
  $("#product").empty();
  dssp.forEach((sp) => {
    if (sp.bestSaler == true) {
      fashion.push(sp);
    }
  });
  napSP(fashion);
}

function listFiler() {
  let Filler = [];
  var min = document.getElementById("priceMin").innerHTML;
  var max = document.getElementById("priceMax").innerHTML;
  $("#product").empty();
  dssp.forEach((sp) => {
    if (sp.price >= parseInt(min) && sp.price <= parseInt(max)) {
      Filler.push(sp);
    }
  });
  napSP(Filler);
}

function sort() {
  let testOption = $("#sort").val();
  if (testOption === "Sort By Price: High To Low") {
    dssp.sort(function (a, b) {
      return b.price - a.price;
    });
    $("#product").empty();
    napSP(dssp);
  }
  if (testOption === "Sort By Price: Low To Hight") {
    dssp.sort(function (a, b) {
      return a.price - b.price;
    });
    $("#product").empty();
    napSP(dssp);
  }
}

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

setTimeout(() => {
  const SaveID = () => {
    listProducts = document.querySelectorAll(".product-item");
    localStorage.removeItem("id");
    for (const item of listProducts) {
      item.onclick = (e) => {
        localStorage.setItem("id", item.id);
        console.log(item.id);
      };
    }
  };
  SaveID();
}, 1000);
// timer
function countdown() {
  const timeSpan =
  new Date().getTime()- new Date("May 12,2022 00:00:00").getTime();

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
const search = document.querySelector(".input-group-text");
console.log(search);
search.onclick = () => {
  listMen();
};
