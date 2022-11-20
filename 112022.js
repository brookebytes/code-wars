//Unscrambled eggs - 7kyu
//Return the string without the word "egg" in it

const unscrambleEggs = word => word.split("egg").filter(x => x!=="egg").join("");
