//A bugs trilogy: Episode 1

function yourFutureCareer() {
	let career = Math.random();
	if (career <= 0.32) {
			return "FrontEnd Developer";
  } else if (career <= 0.65) {
			return "BackEnd Developer";
	} else {
			return "Full-Stack Developer";
	}
}

yourFutureCareer();
