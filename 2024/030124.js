//Trilingual democracy - 7kyu

// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
function trilingualDemocracy(group) {
  const languages = ["D", "F", "I", "K"];
  let speakers = [...new Set(group)];
  if (speakers.length==1) {
    return group[0];
  } else if (speakers.length==2) {
    return speakers.filter(el => group.indexOf(el)==group.lastIndexOf(el))[0];
  } else if (speakers.length==3){
    return languages.filter(el => !speakers.includes(el))[0];
  }
}

