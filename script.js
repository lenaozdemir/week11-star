const button = document.querySelector(".cart__buttonbox");

const totalElement = document.querySelector(".cart__total-price");
let total = parseFloat(totalElement.textContent);

console.log(total);

button.addEventListener("click", function () {
  const discountedTotal = total * 0.8;
  totalElement.textContent = Math.floor(discountedTotal);

  console.log(discountedTotal);
});
