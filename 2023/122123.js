//Calculate Meal Total - 7kyu

function calculate_total(subtotal, tax, tip) {
  return Math.round((subtotal + (subtotal * (tip/100)) + (subtotal * (tax/100))) * 100) / 100;
}
