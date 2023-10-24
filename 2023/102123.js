//Color Association
//

function colourAssociation(array){
  // We <3 colours..
  let colors = [];
  array.forEach(( color, index ) => {
    let obj = {[color[0]]: color[1]};
    colors.push(obj);
  });
  return colors;
}
