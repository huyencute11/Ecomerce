const rangeInput = document.querySelectorAll(".range-input input");
progress = document.querySelector(".slider .progress");
let priceGap = 500;
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal <= priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      document.getElementById("priceMin").innerHTML = minVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      document.getElementById("priceMin").innerHTML = parseInt(minVal / 10);
      document.getElementById("priceMax").innerHTML = parseInt(maxVal / 10);
    }
  });
});
