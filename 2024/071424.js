//British vs Slovakian postcodes - 7kyu

function whichPostcode(postcode){
  console.log("====" + postcode.trim() + "====");
  if (/^[A-Za-z]{1,2}\d{1,2} \d{1}[A-Za-z]{2}$/g.test(postcode.trim())) {
    return "GB";
  }
  return /^\d{3} \d{2}$/g.test(postcode.trim()) ? "SK" : "Not valid";
}
