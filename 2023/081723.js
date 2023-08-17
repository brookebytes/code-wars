//Tail Swap - 7kyu
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

function tailSwap(arr) {
  let colonIndex1 = arr[0].indexOf( ":" );
  let colonIndex2 = arr[1].indexOf( ":" );
  return [
    ( arr[0].slice( 0, colonIndex1 ) + arr[1].slice( colonIndex2 ) ),
    ( arr[1].slice( 0, colonIndex2 ) + arr[0].slice( colonIndex1 ) )
  ];
}
