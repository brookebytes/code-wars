//Palindrome for your Dome - 6kyu
// Your goal is to determine whether or not a given string is a valid palindrome or not.
// The test cases are case insensitive and disregards non alphanumeric characters. The empty string is a palindrome in this case.

function palindrome(string) {
  let forwards = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return forwards === forwards.split("").reverse().join("");
}
