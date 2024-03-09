//Stone Pickaxe Crafting - 7kyu

function stonePick(arr) {
  let pickaxeResources = [arr.filter(e => e==="Cobblestone").length/3,
                          (arr.filter(e => e==="Sticks").length + arr.filter(e => e=="Wood").length*4)/2]
  return Math.floor(Math.min(...pickaxeResources));
}
