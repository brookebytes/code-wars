//If you can read this... - 6kyu
// Task: You'll have to translate a string to Pilot's alphabet.

function to_nato(words) {
	return words.split("").filter(char => char!=' ').map(char => NATO[char.toLowerCase()] ? NATO[char.toLowerCase()] : char).join(" ");
}
