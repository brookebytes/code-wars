//Simple Fun #161: Replace Dashses As One - 6kyu
// note - intentionally solved without using RegExp
/* If string has more than one neighboring dashes(e.g. --) replace they with one dash(-).
 * Dashes are considered neighbors even if there is some whitespace between them.*/

function replaceDashesAsOne(str) {
  let chars = str.split("");
  return chars.map((char, index, chars) => {
    if (char=='-'){
      while (chars[index+1]==' '){
        if (chars[index+2]=='-' || chars[index+2]==' '){
          chars[index+1] = ''
        }
        index++
      }
      if (chars[index+1]=='-'){
       return '';
      } else {
        return char;
      }
    }
    return char;
    }).join("");
  }
