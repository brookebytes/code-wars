//Odd-Even String Sort - 7kyu
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated.

function sortMyString(S) {
    let oddIndexed = S.split("").filter((char, index) => index%2!=0);
    let evenIndexed = S.split("").filter((char, index) => index%2==0);
    return `${evenIndexed.join("")} ${oddIndexed.join("")}`;
}
