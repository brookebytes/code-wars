//The Coupon Code - 7kyu
// Task: Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode===correctCode && new Date(currentDate)<= new Date(expirationDate);
}
