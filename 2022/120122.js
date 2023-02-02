//Break camelCase - 6kyu
/* Complete the solution so that the function will break up camel casing, using a space between words. */

//---------------PREP--------------------
//Parameters: string of words, each new word starts with an uppercase letter
//Return: the string with spaces in between each word
//Examples: console.log(solution('camelCasing'), 'camel Casing');
            //console.log(solution('wordWordWord'), 'word Word Word');
/*Pseudo Code: take the string input and split into array and map, check if a letter is uppercase,
 * if a letter is uppercase, add a space in front of it, else, return the char and continue
 * join the array back to a string and return */

//---------------SOLUTION-----------------

function solution(string) { 
   return string.split("").map(char => char.toUpperCase()===char ? " "+char : char).join("");
}

