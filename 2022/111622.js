//Spoonerize Me - 7kyu

function spoonerize(words) {
    space = words.indexOf(" ");
    return `${words.charAt(space+1) + words.slice(1,space)} ${words.charAt(0)+words.slice(space+2)}`;
}

/*function spoonerize(words) {
    word = words.split(" ");
    return `${word[1].charAt(0)+word[0].slice(1)} ${word[0].charAt(0)+word[1].slice(1)}`;
}*/
