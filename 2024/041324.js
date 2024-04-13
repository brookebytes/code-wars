//Address Book by State - 6kyu

function byState(str) {
  if (str.slice(-1) == "\n") {
    str = str.slice(0, -1);
  }

  const states = {
    'AZ': 'Arizona',
    'CA': 'California',
    'ID': 'Idaho',
    'IN': 'Indiana',
    'MA': 'Massachusetts',
    'OK': 'Oklahoma',
    'PA': 'Pennsylvania',
    'VA': 'Virginia'
  };
  let addressBook = { "AZ": [], "CA": [], "ID": [], "IN": [], "MA": [], "OK": [], "PA": [], "VA": [] };
  let result = "";

  str.split("\n").map(e => addressBook[e.slice(-2)].push(e.split(",").join("").slice(0,-2)));
  let keys = Object.keys(addressBook);
  let values = Object.values(addressBook).map(arr => arr.sort());

  for (i=0; i < 8; i++) {
    if (values[i].length) {
      result += states[keys[i]] + "\r\n..... ";
      for (j=0; j < values[i].length; j++) {

        if (j != values[i].length-1) {
          result += values[i][j] + states[keys[i]] + "\r\n..... ";
        }
        else {
          result += values[i][j] + states[keys[i]] + "\r\n "
        }
      }
    }
  }

  return result.slice(0,-3);
}
