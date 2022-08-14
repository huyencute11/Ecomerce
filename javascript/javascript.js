// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

let header = $("header");
console.log(window.innerWidth);

function setHeader() {
  if (window.innerWidth < 992) {
    if ($(window).scrollTop() > 100) {
      header.css({ top: "0" });
    } else {
      header.css({ top: "0" });
    }
  } else {
    if ($(window).scrollTop() > 100) {
      header.css({ top: "-50px" });
    } else {
      header.css({ top: "0" });
    }
  }
}

$(document).on("scroll", function () {
  setHeader();
});

// handle humburger menu
const handleHumburgerMenu = () => {
  let iconHamBur = document.querySelector(".hamburder_container");
  let hamburgerMenu = document.querySelector(".hamburget-menu");
  let hamburgerClose = document.querySelector(".hamburger-close");
  let hasChildrens = document.querySelectorAll(".has-children");
  let menuSelections = document.querySelectorAll(".menu_selection");

  console.log(menuSelections);
  iconHamBur.onclick = () => {
    hamburgerMenu.classList.add("active");
  };
  hamburgerClose.onclick = () => {
    hamburgerMenu.classList.remove("active");
  };

  hasChildrens[0].onclick = () => {
    menuSelections[0].classList.toggle("active");
  };
  hasChildrens[1].onclick = () => {
    menuSelections[1].classList.toggle("active");
  };

  hasChildrens[2].onclick = () => {
    menuSelections[2].classList.toggle("active");
  };
};
handleHumburgerMenu();
