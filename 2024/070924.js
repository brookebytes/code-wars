// Clothes size number converter - 7kyu

function sizeToNumber(size) {
  const sizes = { "xs": 34, "s": 36, "m": 38, "l": 40, "xl": 42 };
  if (size.length > 2 && (size.slice(-2)=="xl" || size.slice(-2)=="xs")) {
    let baseSize = size.slice(-2);
    let modifier = size.slice(0,size.length-2);
    return baseSize == "xs" ? sizes[baseSize]-(modifier.length*2) : (modifier.length*2)+sizes[baseSize];
  }
  return sizes[size] || null;
}
