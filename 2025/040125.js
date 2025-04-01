// Driving Licence - 7kyu
/* In the United Kingdom, the driving licence is the official document which authorises its holder to operate various types of motor vehicle on highways and some other roads to which the public have access. In England, Scotland and Wales they are administered by the Driver and Vehicle Licensing Agency (DVLA) and in Northern Ireland by the Driver & Vehicle Agency (DVA). A driving licence is required in the UK by any person driving a vehicle on any highway or other road defined in s.192 Road Traffic Act 1988[1] irrespective of ownership of the land over which the road passes, thus including many which allow the public to pass over private land; similar requirements apply in Northern Ireland under the Road Traffic (Northern Ireland) Order 1981. (Source Wikipedia)
 * Task: The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information */

function driver(data) {
  const birthdate = new Date(data[3]);
  let surname = data[2].slice(0,5).toUpperCase().padEnd(5, 9);
  let decadeDigit = data[3].slice(-2,-1);
  let birthMonth = (data[4] == "M") ? String(birthdate.getMonth()+1).padStart(2, 0) : birthdate.getMonth()+51;
  let birthday = String(birthdate.getDate()).padStart(2,0);
  let yearDigit = data[3].slice(-1);
  let firstMiddle = data[0][0] + (data[1].length > 0 ? data[1][0] : "9");
  return `${surname}${decadeDigit}${birthMonth}${birthday}${yearDigit}${firstMiddle}9AA`;
}
