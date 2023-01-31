//Especially Joyful Numbers - 7kyu
/* We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n.
 * Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False. */

function numberJoy(n) {
    let sumOfDigits = n.toString().split("").map(num => Number(num)).reduce((acc,num) => acc+num);
    return sumOfDigits * Number(sumOfDigits.toString().split("").reverse().join("")) === n;
}
