// String to integer conversion - 7kyu


function myParseInt(str) {
  return /^\s*[0-9]+\s*$/g.test(str) ? parseInt(str) : NaN;
}

