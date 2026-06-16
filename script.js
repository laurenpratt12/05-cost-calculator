// Helper functions for basic math operations
function addNumbers(a,b){
  return a + b;
}

function multiplyNumbers(a,b){
  return a * b;
}

// Function to get the base price based on selected size
function getSizePrice(size) {
  // Different prices for different sizes
  if (size === 'small') {
    return 8;
  } else if (size === 'large') {
    return 12;
  } else {
    // Default to medium
    return 10;
  }
}

// Function to calculate pizza cost based on size, number of toppings, and delivery
function calculatePizzaCost(size, toppingsCount, includeDelivery) {
  // Get base price based on size selection
  const basePrice = getSizePrice(size);
  // Price per topping
  const toppingPrice = 2;
  // Delivery fee
  const deliveryFee = 5;
  // Calculate cost: base price + (number of toppings × price per topping)
  let totalCost = addNumbers(basePrice, multiplyNumbers(toppingsCount, toppingPrice));
  // Add delivery fee if selected
  if (includeDelivery) {
    totalCost = addNumbers(totalCost, deliveryFee);
  }
  return totalCost;
}

// Get the pizza order form element
const form = document.getElementById('pizza-order-form');

// Add event listener to handle form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the selected pizza size
  const sizeSelect = document.getElementById('size');
  const selectedSize = sizeSelect.value;
  
  // Get all checked topping checkboxes
  const selectedToppings = document.querySelectorAll('input[name="topping"]:checked');
  
  // Count how many toppings were selected
  const toppingsCount = selectedToppings.length;
  
  // Check if delivery is selected
  const deliveryCheckbox = document.getElementById('delivery');
  const includeDelivery = deliveryCheckbox.checked;
  
  // Calculate the total cost using our function
  const total = calculatePizzaCost(selectedSize, toppingsCount, includeDelivery);
  
  // Get the element where we display the total
  const totalElement = document.getElementById('total');
  
  // Update the page with the calculated total cost
  totalElement.textContent = `Total: $${total}`;
});
