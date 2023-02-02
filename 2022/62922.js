//Simple beads count - 7kyu
//Two red beads are placed between every two blue beads. There are N blue beads.//Return the number of red beads

const countRedBeads = n => n>1 ? (n-1)*2 : 0;
