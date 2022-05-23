//Count the smiley faces - 6kyu
//return the total number of smiling faces in the array
//*solved without using regex*
function countSmileys(arr) {
    let faces = arr.filter((str) => (str.includes(":"||";") || str.includes(";")) && (str.includes(")") || str.includes("D")));
    return faces.filter((face) => face.length==2 || (face.includes("-") || face.includes("~")) && face.length<4).length;
  }

//Find the missing letter - 6kyu
function findMissingLetter(array){
    let upper = false; //check case of input
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if (array[0]==array[0].toUpperCase()) {
      //if the input is UpperCase
      alphabet = alphabet.map(x => x.toUpperCase());
      upper = true;
    }
    let start = alphabet.indexOf(array[0]);
    let end = alphabet.indexOf(array[array.length-1]);
    for (i=start; i<=end; i++){
      if (!array.includes(alphabet[i])){
        return upper==true ? alphabet[i].toUpperCase() :  alphabet[i];
      }
    }
    return ' ';
  }