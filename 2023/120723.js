//GA-DE-RY-PO-LU-KI cypher - 7kyu

let key = {"G": "A", "g": "a", "a": "g", "A": "G", "D": "E", "d": "e", "e": "d", "E": "D",
             "R": "Y", "r": "y", "y": "r", "Y": "R", "P": "O", "p": "o", "o": "p", "O": "P",
             "L": "U", "l": "u", "u": "l", "U": "L", "K": "I", "k": "i", "i": "k", "I": "K"};

function encode(str)
{
    return str.split("").map(char => key[char] || char).join("");
}

function decode(str)
{
    return str.split("").map(char => key[char] || char ).join("");
}
