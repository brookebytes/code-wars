//All or Nothing - 7kyu

function possiblyPerfect(key,answers) {
  return answers.every((ans, i) => ans==key[i] || key[i]=="_") || answers.every((ans, i) => ans!=key[i] || key[i]=="_");
}
