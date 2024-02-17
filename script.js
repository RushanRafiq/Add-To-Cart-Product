console.log('====================================');
console.log("Connected");
console.log('====================================');

// add cart function
let cartCounter = 0;
const increaseProductCount = document.getElementById('inc-to-product-count-btn');
const decreaseProductCount = document.getElementById('dec-to-product-count-btn');
const cartCounterDisplay = document.getElementById('cart-counter');

increaseProductCount.addEventListener('click', () => {
  cartCounter++;
  cartCounterDisplay.textContent = cartCounter;
});
decreaseProductCount.addEventListener('click', () => {
  if(cartCounter > 0)
  cartCounter--;
  cartCounterDisplay.textContent = cartCounter;
});
// calculate discounted percentage function
function calculateDiscountPercentage(actualPrice, discountedPrice) {
  // Calculate the discount percentage
  const discount = actualPrice - discountedPrice;
  const discountPercentage = (discount / actualPrice) * 100;
  return discountPercentage.toFixed(2); // Return the discount percentage with two decimal places
}

const percentageDisplay = document.getElementById('discount-percentage');

const actualPrice = parseFloat(document.getElementById('actual-price').textContent.split('$')[1]);
const discountedPrice = parseFloat(document.getElementById('discounted-price').textContent.split('$')[1]);
// Call the calculateDiscountPercentage function
const discountPercentage = calculateDiscountPercentage(actualPrice, discountedPrice);
percentageDisplay.textContent = discountPercentage+'% off';

// select color function
const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    checkboxes.forEach(otherCheckbox => {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.classList.remove('checked');
      }
    });
    checkbox.classList.toggle('checked');
  });
});
